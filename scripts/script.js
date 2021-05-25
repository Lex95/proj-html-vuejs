const app = new Vue({
    el: "#app",
    data: {
        links: [
            {
                name: "Home",
                href: "#home"
            },
            {
                name: "Meet The Band",
                href: "#s1"
            },
            {
                name: "Live Dates",
                href: "#s5"
            },
            {
                name: "Latest News",
                href: "#s2"
            },
            {
                name: "Albums",
                href: "#"
            },
            {
                name: "Fans",
                href: "#s4"
            }
        ],
        navMenuOpen: false,
        liveDates: [
            {
                date: "17/08/2020",
                eventName: "Gem Festival 2020",
                location: "Anakalia, Georgia",
                map: "",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At enim, neque quae dolores amet dolor quidem aspernatur! Similique laudantium, natus, ex illum culpa quas quaerat velit quis labore in modi adipisci cum nemo omnis obcaecati."
            },
            {
                date: "24/09/2020",
                eventName: "Groovefest",
                location: "Dominical Republic",
                map: "",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptate ad, perferendis quis eligendi aliquid optio dolorum quam facere sequi incidunt maiores iste laudantium, vel autem distinctio commodi consectetur. Numquam modi architecto corrupti magnam ducimus?"
            },
            {
                date: "31/10/2020",
                eventName: "Oasis Festival 2020",
                location: "Marrakech, Morocco",
                map: "",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ipsum neque quidem, ducimus voluptas commodi nihil cupiditate ex mollitia porro a consequatur temporibus error illum laudantium cum omnis tenetur consectetur dicta deserunt! Voluptate, eos asperiores."
            },
            {
                date: "07/11/2020",
                eventName: "Moga Festival",
                location: "Essaouria, Morocco",
                map: "",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum asperiores voluptas, sit quo harum in voluptates hic ducimus, explicabo eos numquam qui, omnis soluta incidunt aut aliquid officiis eligendi facilis minus. Quod ipsum vel eum."
            },
            {
                date: "10/12/2020",
                eventName: "Envision Festival",
                location: "Uvita, Costa Rica",
                map: "",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum delectus doloremque consequuntur deleniti, saepe ea quidem quisquam! Ipsum, vero? Reprehenderit voluptate soluta quibusdam alias deleniti vero odit numquam aut, sit nihil architecto praesentium atque aspernatur."
            }
        ]
        // maxDates: 5
    },
    methods: {
        toggleNavMenu() {
            this.navMenuOpen = !this.navMenuOpen;
        }
    }
})