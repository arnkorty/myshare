export function iPage (Page) {
  const app = getApp()
  return (props) => Page({
    app,
    api: app.api,
    log: app.log,
    warn: app.warn,
    ...props
  })
}
