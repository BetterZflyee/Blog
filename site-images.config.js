// 站点图片配置文件
// 修改此文件后，重新部署即可更新头像和背景图

const SITE_IMAGES = {
  // 用户头像 - 支持任意图片格式：PNG、JPG、JPEG、WEBP、GIF 等
  // 示例：
  // - 本地图片：'/avatar.png'、'/avatar.jpg'（需放在 public 目录下）
  // - 在线图片：'https://example.com/avatar.jpg'
  // - Notion图片：使用Notion导出的图片链接
  AVATAR: 'https://raw.githubusercontent.com/BetterZflyee/MyAssets/main/avatar.jpg',

  // Hero区域背景图 - 支持任意图片格式：PNG、JPG、JPEG、WEBP、GIF 等
  // 示例：
  // - 本地图片：'/cover.png'、'/cover.jpg'、'/cover.webp'、'/bg_image.jpg'
  // - 在线图片：'https://example.com/banner.jpg'
  HOME_BANNER_IMAGE: '/bg_image.jpg'
}

module.exports = SITE_IMAGES
