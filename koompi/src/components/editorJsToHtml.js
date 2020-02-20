function renderHTML(data) {
  let html = ``
  for (let block of JSON.parse(data).blocks) {
    switch (block.type) {
      case "header":
        html += `<h${block.data.level}>${block.data.text}</h${block.data.level}>`
        break
      case "paragraph":
        html += `<p>${block.data.text}</p>`
        break
      case "delimiter":
        html += "<hr />"
        break
      case "image":
        html += `<img class="img-fluid" src="${block.data.file.url}" title="${block.data.caption}" /><br /><em>${block.data.caption}</em>`
        break
      case "list":
        if (block.data.style === "unordered") {
          const list = block.data.items.map((item) => {
            return `<li class="cdx-list__item">${item}</li>`
          })
          html += `<div class="ce-block">
            <div class="ce-block__content">
              <div class="ce-paragraph cdx-block">
                <ul class="cdx-list--unordered">${list.join("")}</ul>
              </div>
              </div>
            </div>\n`
        } else {
          const list = block.data.items.map((item) => {
            return `<li class="cdx-list__item">${item}</li>`
          })
          html += `<div class="ce-block">
            <div class="ce-block__content">
              <div class="ce-paragraph cdx-block">
                <ol class="cdx-list--ordered">${list.join("")}</ol>
              </div>
              </div>
            </div>\n`
        }
        break
      default:
        console.log("Unknown block type", block.type)
        console.log(block)
        break
    }
  }
  return html
}

export default renderHTML
