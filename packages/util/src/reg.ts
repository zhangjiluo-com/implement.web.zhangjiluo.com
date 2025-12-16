
/**
* 网络 IPv4 地址
* @example 192.168.0.1
*/
export const IPV4_RULE = /^((25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/;

/**
* 网络 IPv6 地址
 * @example 2001:0db8:85a3:0000:0000:8a2e:0370:7334
 */
const IPV6_RULE = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;

/**
 * 中国内地手机号码
 * @example 18818188888
 */
export const CHINESE_PHONE_RULE = /^1[3-9]\d{9}$/;

/**
 * 中国内地座机号码
 * @example 028-999999999
 */
export const CHINESE_LANDLINE_RULE = /^0\d{2,3}-\d{7,8}$/;

/**
 * 中国内地邮政编码
 * @example 600000
 */
export const CHINESE_POSTAL_CODE_RULE = /^[1-9]\d{5}$/;

/**
 * 中国居民身份证号码
 * @example 511321200001011238
 */
export const CHINESE_ID_RULE = /^[1-9]\d{5}(18|19|20)\d{2}(0\d|1[0-2])([0-2]\d|3[0-1])\d{3}[\dX]$/;

/**
 * 中国车牌号
 * @example 川A88888
 */
export const CHINESE_LICENSE_PLATE_RULE = /^[\u4e00-\u9fa5][A-Z][A-Z_0-9]{5}$/;

/**
 * 中国内地用户主流邮箱地址 qq.com 163.com 126.com 139.com foxmail.com gmail.com outlook.com icloud.com
 * @example qq.com
 */
export const CHINESE_MAIN_MAIL_RULE = /^(qq|163|126|139|foxmail|gmail|outlook|icloud)\.com$/


/**
 * 迅雷链接正则
 * @example thunder://afoia812na98f0a123123 thunderx://afoia812na98f0a123123
 */
export const THUNDERBOLT_RULE = /^thunderx?:\/\/[a-zA-Z\d]+=$/;

/**
 * 软件版本号
 * @example 1.0.0
 */
export const SOFTWARE_VERSION_RULE = /^\d+(\.\d+){0,2}$/;

/**
 * 通用邮箱地址
 * @example me@jiluo.cc
 */
export const MAIL_RULE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * HTML 注释
 * @example <!-- header -->
 */
export const HTML_COMMENT_RULE = /<!--[\s\S]*?-->/;

// 图片文件格式（后缀）
export const IMAGE = /^(jpe?g|png|gif|bmp)$/i

/**
 * 视频文件格式（后缀）
 * @example mp4
 */
export const VIDEO_RULE = /^(mp4|avi|mov|wmv|flv|mkv)$/i;

/**
 * 音频文件格式（后缀）
 * @example mp3
 */
export const AUDIO_RULE = /^(mp3|wav|ogg|flac)$/i;

/**
 * 文件名
 */
export const FILE_NAME_RULE = /^[^\\/:*?"<>|]+$/;


/**
 * GUID/UUID
 * @example 01234567-89ab-cdef-0123-456789abcdef
 */
export const UUID_RULE = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

/**
 * 简体中文汉字以及标点符号
 * @example 你好
 */
export const SIMPLIFIED_CHINESE_RULE = /^[\u4e00-\u9fa5，。、；：？！]+$/;

/**
 * 繁体中文汉字以及标点符号
 * 美麗
 */
export const TRADITIONAL_CHINESE_RULE = /^[\u4e00-\u9fa5，。、；：？！「」『』【】《》（）［］｛｝]+$/;


/**
 * 小数
 * @example 0.1 -0.1 1.0 -1.0 1.23 -1.23
 */
export const DECIMAL_RULE = /^-?\d+(\.\d+)?$/;

/**
 * 整数
 * @example 0 1 2 3 -1 -2 -3
 */
export const INTEGER_RULE = /^-?\d+$/;


/**
 * QQ 号；5 至 11 位数字
 * @example 153583876 305384014
 */
export const QQ_RULE = /^[1-9][0-9]{4,10}$/;

/**
 * 微信号；6 至 20 位；字母、数字、减号、下划线组合；以字母开头
 * @example jiluo-cc
 */
export const WE_CHAT_RULE = /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/;

/**
 * CSS 颜色值（16 进制）；支持 3 位或 6 位
 * @example #fff #ffffff
 */
export const CSS_COLOR_RULE = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;


/**
 * URL 地址
 * @example https://www.dongxi.dev
 */
export const URL_RULE = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;


/**
 * 域名（不包含非英文域名）
 * @example dongxi.dev
 */
export const DOMAIN_RULE = /^((?!-)[A-Za-z0-9-]{1,63}(?<!-)\.)+[A-Za-z]{2,6}$/;
