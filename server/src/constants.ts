import { ConstantTypes } from './types/constantTypes';
import { FirebaseConfigTypes } from './types/apiTypes';


export const constants: ConstantTypes = {
    port: 4500,
    authHeader: "x-access-potter-auth-token",
    baseApiUrl: "/api/v1",
    client_id: 'dd9aa4570f110091da24',
    client_secret: "fecf8ac7378fc3cdba2ec36c40a88b1ae5728be6"
};

export const firebaseConfig: FirebaseConfigTypes = {
    apiKey: "AIzaSyA2LgZRKfH1y2T5NAxTtWxfkZZ0tbyzKYk",
    authDomain: "potter-e7259.firebaseapp.com",
    projectId: "potter-e7259",
    storageBucket: "potter-e7259.appspot.com",
    messagingSenderId: "508656216323",
    appId: "1:508656216323:web:ecf24188be5a027517e136",
    measurementId: "G-41DSEPR2T4"
};

export const unsupportedFileTypes = new Set<string>(['png', 'jpeg', 'jpg', 'gif', 'svg', 'ico', 'bmp', 'tif', 'tiff', 'psd', 'ai', 'eps', 'pdf', 'doc', 'docx', 'ppt', 'pptx', 'xls', 'xlsx', 'csv', 'json', 'xml', 'txt', 'md', 'rtf', 'odt', 'ods', 'odp', 'mp3', 'wav', 'aac', 'ogg', 'flac', 'mp4', 'mov', 'avi', 'mkv', 'swf', 'zip', 'rar', 'tar', '7z', 'scss', 'less', 'sass', 'csv', 'yml', 'yaml', 'toml', 'ini', 'env', 'lock', 'patch', 'svgz', 'eot', 'ttf', 'woff', 'woff2', 'otf', 'ps', 'eps', 'wmv', 'flv', 'webm', 'm4v', '3gp', 'ai', 'sketch', 'xlsb', 'docm', 'xlsm', 'pptm', 'potx', 'potm', 'ppam', 'ppsx', 'ppsm', 'pub'])