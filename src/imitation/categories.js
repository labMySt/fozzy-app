export default {
  confectionary: {
    name: "Кондитерські вироби",
    path: "confectionary",
    groups: [
      {
        name: "торт",
        path: "pie",
        subgroups: [
          {
            name: "бісквіт",
            path: " sponge_cake"
          }, {
            name: "шоколадні",
            path: "chocolate"
          }
        ]
      }, {
        name: "кекси",
        path: "cupcakes",
        subgroups: [
          {
            name: "з начинкою",
            path: "with_stuffing"
          }
        ]
      }, {
        name: "печиво",
        path: "cookies",
        subgroups: [
          {
            name: "пісочне",
            path: "sandy"
          }, {
            name: "заварне",
            path: "cured"
          }
        ]
      }
    ]
  },
  oil: {
    name : "олія",
    path: "oil",
    groups: [
      {
        name: "соняшникова",
        path: "sunflower_seeds",
        subgroups: [
          {
            name: "рафінована",
            path: "refined"
          }, {
            name: "нерафінована",
            path: "unrefined"
          }
        ]
      }, {
        name: "оливкова",
        path: "olive",
        subgroups: [
          {
            name: "екстра вірджін",
            path: "extra_virgin"
          }
        ]
      }
    ]
  },
  ice: {
    name : "морозиво",
    path: "ice",
    groups: [
      {
        name: "ескімо",
        path: "eskimo",
        subgroups: [
          {
            name: "фруктове",
            path: "fruit"
          }
        ]
      }, {
        name: "ріжок",
        path: "horn",
        subgroups: [
          {
            name: "пломбір",
            path: "plomber"
          }
        ]
      }, {
        name: "стакан",
        path: "glass",
        subgroups: [
          {
            name: "шоколадне",
            path: "chocolate"
          }, {
            name: "фруктове",
            path: "fruit"
          }, {
            name: "і ше якесь",
            path: "ather"
          }
        ]
      }
    ]
  },
  alcogol: {
    name : "Алкоголь",
    path: "alcogol",
    groups: [
      {
        name: "Пиво",
        path: "beer",
        subgroups: [
          {
            name: "фруктове",
            path: "classic"
          }, {
            name: "і ше якесь",
            path: "light"
          }
        ]
      }, {
        name: "Віскі",
        path: "whiskey",
        subgroups: [
          {
            name: "Бурбон",
            path: "bourbon"
          }, {
            name: "Скотч",
            path: "scotch"
          }
        ]
      }, {
        name: "Горілка",
        path: "vodka",
        subgroups: null
      }
    ]
  }
};
