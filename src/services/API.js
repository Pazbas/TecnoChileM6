export const Products = {
  all() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {id:1, name:"Notebook HP", price:550990, stock:5, img:"../src/assets/productos/notebook_hp_pavilion.jpg"},
          {id:2, name:"Mouse", price:25990, stock:10, img:"../src/assets/productos/mouse.jpg"},
          {id:3, name:"Teclado", price:45990, stock:8, img:"../src/assets/productos/teclado.jpg"},
          {id:4, name:"Monitor", price:199990, stock:6, img:"../src/assets/productos/monitor_gamer.jpg"},
          {id:5, name:"Auriculares Gamer", price:79990, stock:7, img:"../src/assets/productos/auriculares_gamer.jpg"},
          {id:6, name:"Nintendo Switch 2", price:349990, stock:4, img:"../src/assets/productos/nintendo_switch_2.jpg"},
          {id:7, name:"Mini Dron", price:459990, stock:9, img:"../src/assets/productos/mini_dron.jpg"},
          {id:8, name:"Impresora", price:119990, stock:12, img:"https://github.com/Pazbas/TecnoChileM6/blob/main/public/impresora.jpg"},
          {id:9, name:"Roku Express", price:49990, stock:3, img:"../src/assets/productos/roku_express.jpg"},
        ])
      }, 300);
    })
  }
}
