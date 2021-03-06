// 添加元素信息开始的配置信息
const baseUrl = "https://xinetzone.github.io"

class StartBlock {
    static createLink(href, rel = "stylesheet") {
        let link = document.createElement('link')
        link.rel = rel
        link.href = href
        return link
    }
    static fontAwesome() {
        // 添加 font-awesome 图标支持
        // const href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        // Font Awesome 5
        const href = baseUrl+"/Font-Awesome/css/all.css"
        return StartBlock.createLink(href)
    }
    static w3css() {
        // 添加 w3-css 主题
        const href = baseUrl+"/xinet-css/w3css/4/w3.css"
        return StartBlock.createLink(href)
    }

    static complexCSS() {
        const href = baseUrl+"/xinet-css/complex.css"
        return StartBlock.createLink(href)
    }

    static homeCSS() {
        const href = baseUrl+"/xinet-css/home.css"
        return StartBlock.createLink(href)
    }

    static tabCSS() {
        const href = baseUrl+"/xinet-css/tabs.css"
        return StartBlock.createLink(href)
    }
}

function addStartAfter(parent) {
    parent.after(StartBlock.complexCSS())
    parent.after(StartBlock.fontAwesome())
    parent.after(StartBlock.homeCSS())
    parent.after(StartBlock.w3css())
}

function addStart(parent) {
    parent.append(StartBlock.w3css(), StartBlock.homeCSS(),
        StartBlock.tabCSS(),
        StartBlock.fontAwesome(), StartBlock.complexCSS())
}

export { addStart, addStartAfter }