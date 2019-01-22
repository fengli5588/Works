function Component(title) {
    let html = (children) => `<div><h1>${title}</h1>${children}</div>`

    return (target) => {
        return class extends target {
            render() {
                return html(super.render())
            }
        }
    }
}

@Component("My Pic")
class Greeter {
    render() {
        return "<img src='' />"
    }
}

@Component("My Articles")
class Article {
    render() {

    }
}

// Componet("My Pic")(class Greeter{})
let g = new Greeter()

console.log(g.render())