import defaultSettings from '@/settings'

const title = defaultSettings.title || '订单管理系统'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    // console.log(title);
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
