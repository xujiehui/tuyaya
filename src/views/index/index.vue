<template>
    <div class="theme-switch">
        <a-button 
            type="outline" 
            shape="circle"
            @click="toggleTheme"
        >
            <template #icon>
                <icon-moon-fill v-if="isDark" />
                <icon-sun-fill v-else />
            </template>
        </a-button>
    </div>
    <div class="container">
        <div class="header">
            <a-typography>
                <a-typography-title :heading="3">图压压-图片压缩</a-typography-title>
                <a-typography-paragraph>支持jpg、jpeg、png、webp等格式的图片压缩，默认压缩质量为80%</a-typography-paragraph>
            </a-typography>
        </div>
        
        <a-upload 
            class="upload-area"
            draggable 
            action="/" 
            multiple 
            :auto-upload="false"
            :file-list="files"
            :show-file-list="false"
            @change="onChange" 
            accept="image/*"
        >
            <template #upload-button>
                <div class="upload-content">
                    <div class="upload-icon">
                        <icon-upload />
                    </div>
                    <div class="upload-text">
                        <p class="primary-text">点击或拖拽图片到这里上传</p>
                        <p class="secondary-text">支持jpg、jpeg、png、webp等格式</p>
                    </div>
                </div>
            </template>
        </a-upload>

        <div v-if="files.length" class="batch-actions">
            <a-space>
                <a-button 
                    type="primary"
                    :loading="isCompressingAll"
                    @click="handleCompressAll"
                >
                    开始压缩全部
                </a-button>
                <a-button 
                    type="outline"
                    :loading="isDownloadingZip"
                    :disabled="!hasCompressedFiles"
                    @click="handleDownloadZip"
                >
                    打包下载
                </a-button>
                <a-button 
                    status="danger"
                    @click="handleClearAll"
                >
                    清空列表
                </a-button>
            </a-space>
        </div>

        <div v-if="files.length" class="file-list">
            <div class="file-list-content">
                <div v-for="(file, index) in files" :key="file.uid" class="file-item">
                    <div class="preview">
                        <img :src="file.url" alt="preview" />
                    </div>
                    <div class="info">
                        <div class="file-name">{{ file.file?.name }}</div>
                        <div class="file-size">
                            <span>原始大小: {{ formatFileSize(file.file?.size || 0) }}</span>
                            <span v-if="file.compressed">
                                压缩后: {{ formatFileSize(file.compressed.size) }}
                                <span class="compression-rate">
                                    压缩率: {{ calculateCompressionRate(file.file?.size || 0, file.compressed.size) }}%
                                </span>
                            </span>
                        </div>
                    </div>
                    <div class="actions">
                        <a-button 
                            type="primary" 
                            :loading="file.compressing"
                            @click="handleCompress(file)"
                            size="small"
                        >
                            {{ file.compressed ? '重新压缩' : '压缩' }}
                        </a-button>
                        <a-button 
                            v-if="file.compressed"
                            @click="handleDownload(file.compressed)"
                            size="small"
                        >
                            下载
                        </a-button>
                        <a-button 
                            @click="handleRemove(index)"
                            status="danger"
                            size="small"
                        >
                            删除
                        </a-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue'
import type { FileItem } from '@arco-design/web-vue'
import { IconUpload, IconMoonFill, IconSunFill } from '@arco-design/web-vue/es/icon'
import imageCompression from 'browser-image-compression'
import JSZip from 'jszip'

interface ExtendedFileItem extends FileItem {
    compressed?: File
    compressing?: boolean
    url?: string
}

const files = ref<ExtendedFileItem[]>([]);
const isCompressingAll = ref(false);
const isDownloadingZip = ref(false);

// 主题相关
const isDark = ref(false);

// 切换主题
const toggleTheme = () => {
    isDark.value = !isDark.value;
    document.body.setAttribute('arco-theme', isDark.value ? 'dark' : 'light');
    // 保存主题设置到本地存储
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
};

// 初始化主题
onMounted(() => {
    // 从本地存储获取主题设置
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        isDark.value = true;
        document.body.setAttribute('arco-theme', 'dark');
    }
});

const onChange = (fileList: FileItem[], currentFile: FileItem) => {
    // 如果是删除操作，不做处理（删除操作由 handleRemove 处理）
    if (!currentFile.file) return;
    
    // 检查文件是否已存在
    const isExist = files.value.some(file => file.uid === currentFile.uid);
    if (isExist) return;

    // 只添加新文件
    const newFile = {
        ...currentFile,
        url: URL.createObjectURL(currentFile.file as File)
    };
    files.value.push(newFile);
};

const handleCompress = async (file: ExtendedFileItem) => {
    if (!file.file) return;
    
    file.compressing = true;
    try {
        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 1920,
            useWebWorker: true,
            quality: 0.8
        };
        
        const compressedFile = await imageCompression(file.file as File, options);
        
        // 如果压缩后的文件更大，则使用原文件
        if (compressedFile.size >= file.file.size) {
            // 创建一个新的 File 对象，以保持一致的接口
            file.compressed = new File([file.file], file.file.name, {
                type: file.file.type,
                lastModified: file.file.lastModified
            });
        } else {
            file.compressed = compressedFile;
        }
    } catch (error) {
        console.error('压缩失败:', error);
    } finally {
        file.compressing = false;
    }
};

const handleDownload = (file: File) => {
    const url = URL.createObjectURL(file);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', file.name);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};

const handleRemove = (index: number) => {
    const file = files.value[index];
    if (file.url) {
        URL.revokeObjectURL(file.url);
    }
    files.value.splice(index, 1);
};

const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${(bytes / Math.pow(k, i)).toFixed(2)} ${sizes[i]}`;
};

const calculateCompressionRate = (originalSize: number, compressedSize: number) => {
    return ((1 - compressedSize / originalSize) * 100).toFixed(1);
};

const handleCompressAll = async () => {
    if (isCompressingAll.value) return;
    
    isCompressingAll.value = true;
    try {
        // 过滤出未压缩的文件
        const uncompressedFiles = files.value.filter(file => !file.compressed);
        
        // 使用 Promise.all 并行处理所有压缩任务
        await Promise.all(
            uncompressedFiles.map(file => handleCompress(file))
        );
        
    } catch (error) {
        console.error('批量压缩失败:', error);
    } finally {
        isCompressingAll.value = false;
    }
};

const handleClearAll = () => {
    // 释放所有已创建的 URL
    files.value.forEach(file => {
        if (file.url) {
            URL.revokeObjectURL(file.url);
        }
    });
    // 清空文件列表
    files.value = [];
};

// 计算是否有已压缩的文件
const hasCompressedFiles = computed(() => {
    return files.value.some(file => file.compressed);
});

// 打包下载所有已压缩的文件
const handleDownloadZip = async () => {
    if (isDownloadingZip.value) return;
    
    const compressedFiles = files.value.filter(file => file.compressed);
    if (compressedFiles.length === 0) return;
    
    isDownloadingZip.value = true;
    
    try {
        const zip = new JSZip();
        
        // 添加所有压缩后的文件到 zip
        compressedFiles.forEach(file => {
            if (file.compressed) {
                // 使用原文件名，但添加 compressed_ 前缀
                const fileName = `${file.file?.name}`;
                zip.file(fileName, file.compressed);
            }
        });
        
        // 生成 zip blob
        const blob = await zip.generateAsync({
            type: 'blob',
            compression: 'DEFLATE',
            compressionOptions: {
                level: 6
            }
        });
        
        // 创建下载链接并触发下载
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = '图压压.zip';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        
    } catch (error) {
        console.error('打包下载失败:', error);
    } finally {
        isDownloadingZip.value = false;
    }
};
</script>

<style lang="less">
// 添加全局样式
body {
    // 使用更适合的背景色变量
    background-color: var(--color-bg-1);
    min-height: 100vh;
    margin: 0;
    transition: all 0.3s ease;
}

// 暗色模式下的全局调整
[arco-theme='dark'] {
    body {
        // 暗色模式下使用更深的背景色
        background-color: var(--color-bg-2);
    }

    .container {
        .header {
            :deep(.arco-typography-title) {
                color: var(--color-text-1);
            }
            :deep(.arco-typography-paragraph) {
                color: var(--color-text-3);
            }
        }
    }

    .batch-actions {
        :deep(.arco-btn) {
            border-color: var(--color-neutral-4);
        }
    }

    .file-list {
        background: var(--color-bg-3);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }

    .file-item {
        background: var(--color-bg-2);
        border: 1px solid var(--color-neutral-4);
        box-shadow: none;

        &:hover {
            background: var(--color-fill-2);
            border-color: var(--color-neutral-5);
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        }

        .preview {
            border-color: var(--color-neutral-4);
            background: var(--color-bg-1);
        }

        .info {
            .file-name {
                color: var(--color-text-1);
            }
            .file-size {
                color: var(--color-text-3);
            }
        }

        .actions {
            :deep(.arco-btn) {
                border-color: var(--color-neutral-4);
                
                &:hover {
                    border-color: rgb(var(--primary-6));
                }
            }
        }
    }

    // 主题切换按钮
    .theme-switch {
        :deep(.arco-btn) {
            background: var(--color-bg-2);
            border-color: var(--color-neutral-4);
            color: var(--color-text-1);

            &:hover {
                background: var(--color-fill-2);
                border-color: rgb(var(--primary-6));
            }
        }
    }

    // 上传区域暗色模式优化
    .upload-area {
        :deep(.arco-upload-drag) {
            background: var(--color-bg-2);
            border-color: var(--color-neutral-4);
            
            &:hover {
                border-color: rgb(var(--primary-6));
                background: var(--color-fill-2);

                .upload-icon {
                    background: var(--color-fill-3);
                }
            }

            &:active {
                background: var(--color-fill-3);
            }
        }

        .upload-content {
            .upload-icon {
                background: var(--color-fill-2);
                border: 1px solid var(--color-neutral-4);

                :deep(.arco-icon) {
                    color: rgb(var(--primary-6));
                }
            }

            .upload-text {
                .primary-text {
                    color: var(--color-text-1);
                }
                .secondary-text {
                    color: var(--color-text-3);
                }
            }
        }
    }

    // 压缩率显示优化
    .compression-rate {
        color: rgb(var(--success-6)) !important;
    }

    // 拖拽状态优化
    :deep(.arco-upload-drag-active) {
        border-color: rgb(var(--primary-6)) !important;
        background: var(--color-fill-3) !important;
    }
}
</style>

<style lang="less" scoped>
.container {
    padding: 8px;
    max-width: 800px;
    margin: 0 auto;
    min-height: 100vh;
    height: 100vh;
    display: flex;
    flex-direction: column;
    transition: background-color 0.3s ease;
}

.header {
    flex-shrink: 0;
    text-align: center;
    margin-bottom: 24px;

    :deep(.arco-typography-title) {
        margin-bottom: 8px;
    }

    :deep(.arco-typography-paragraph) {
        color: var(--color-text-2);
        margin-bottom: 0;
    }
}

.upload-area {
    flex-shrink: 0;
    width: 100%;
    padding: 24px;
    margin-bottom: 24px;
    border-radius: 8px;
    border: 2px dashed var(--color-neutral-3);
    transition: all 0.3s ease;

    &:hover {
        border-color: rgb(var(--primary-6));
    }

    :deep(.arco-upload-drag) {
        padding: 80px 40px;  // 加大上下内边距
        background: var(--color-bg-2);
        border: none;  // 移除内部边框
        border-radius: 6px;
        transition: all 0.3s ease;
        cursor: pointer;

        &:hover {
            background: var(--color-fill-3);

            .upload-icon {
                transform: translateY(-2px);
                color: rgb(var(--primary-6));
            }
        }

        &:active {
            background: var(--color-fill-4);
        }
    }
}

.upload-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;  // 增加间距
    
    .upload-icon {
        width: 64px;  // 加大图标尺寸
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--color-fill-3);
        border-radius: 16px;  // 增加圆角
        transition: all 0.3s ease;

        :deep(.arco-icon) {
            font-size: 32px;  // 加大图标尺寸
            color: rgb(var(--primary-6));
        }
    }

    .upload-text {
        text-align: center;

        .primary-text {
            font-size: 18px;  // 加大字号
            font-weight: 500;
            color: var(--color-text-1);
            margin-bottom: 12px;  // 增加间距
        }

        .secondary-text {
            font-size: 14px;  // 加大字号
            color: var(--color-text-3);
            margin: 0;
        }
    }
}

// 拖拽状态样式
:deep(.arco-upload-drag-active) {
    border-color: rgb(var(--primary-6)) !important;
    background: var(--color-fill-3) !important;

    .upload-icon {
        transform: scale(1.1);
    }
}

.batch-actions {
    flex-shrink: 0;
    margin-bottom: 16px;
    display: flex;
    justify-content: flex-end;
}

.file-list {
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background: var(--color-bg-2);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    padding: 16px;
    min-height: 200px;
    
    .file-list-content {
        flex: 1;
        overflow-y: auto;
        overflow-x: hidden;
        padding-right: 8px;
        margin-right: -8px;
        
        &::-webkit-scrollbar {
            width: 6px;
            height: 6px;
        }

        &::-webkit-scrollbar-thumb {
            background: var(--color-neutral-4);
            border-radius: 3px;
            
            &:hover {
                background: var(--color-neutral-5);
            }
        }

        &::-webkit-scrollbar-track {
            background: transparent;
        }
    }
}

.file-item {
    display: flex;
    align-items: center;
    padding: 16px;
    background: var(--color-bg-1);
    border-radius: 8px;
    margin-bottom: 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    transition: all 0.2s ease;

    &:hover {
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
    }

    &:last-child {
        margin-bottom: 0;
    }

    .preview {
        width: 60px;
        height: 60px;
        margin-right: 16px;
        border-radius: 6px;
        overflow: hidden;
        border: 1px solid var(--color-neutral-3);
        background: var(--color-fill-2);
        
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .info {
        flex: 1;
        margin-right: 16px;
        min-width: 0;

        .file-name {
            color: var(--color-text-1);
            font-weight: 500;
            margin-bottom: 6px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .file-size {
            color: var(--color-text-3);
            font-size: 13px;

            span {
                margin-right: 16px;

                &:last-child {
                    margin-right: 0;
                }
            }

            .compression-rate {
                color: rgb(var(--success-6));
            }
        }
    }

    .actions {
        display: flex;
        gap: 8px;
        flex-shrink: 0;
    }
}

// 暗色模式特定样式
[arco-theme='dark'] {
    .container {
        // 容器在暗色模式下的样式调整
        background-color: transparent;
    }

    .upload-area {
        border-color: var(--color-neutral-4);

        &:hover {
            border-color: rgb(var(--primary-6));
        }

        :deep(.arco-upload-drag) {
            background: var(--color-bg-2);
            
            &:hover {
                background: var(--color-fill-2);
            }

            &:active {
                background: var(--color-fill-3);
            }
        }
    }

    .file-item {
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

        &:hover {
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
        }
    }

    .preview {
        border-color: var(--color-neutral-4);
    }

    .file-list {
        .file-list-content {
            &::-webkit-scrollbar-thumb {
                background: var(--color-neutral-5);
                
                &:hover {
                    background: var(--color-neutral-6);
                }
            }
        }
    }
}

// 主题切换按钮样式
.theme-switch {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 100;

    :deep(.arco-btn) {
        width: 36px;
        height: 36px;
        font-size: 18px;
        
        &:hover {
            background-color: var(--color-fill-3);
        }
    }
}
</style>