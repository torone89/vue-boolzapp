
// VERIFICA COLLEGAMENTO JAVA
console.log("JS")

// VERIFICA COLLEGAMENTO VUEJS

console.log('Vue ok', Vue)

new Vue({
    el: '#root  ',
    data: {
        user: {
            name: 'Nome Utente',
            avatar: '_io'
        },

        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
            },
            {
                name: 'Fabio',
                avatar: '_2',
            },
            {
                name: 'Samuele',
                avatar: '_3',
            },
            {
                name: 'Luisa',
                avatar: '_4',
            },
            {
                name: 'Michele',
                avatar: '_1',
            },
            {
                name: 'Fabio',
                avatar: '_2',
            },
            {
                name: 'Samuele',
                avatar: '_3',
            },
            {
                name: 'Luisa',
                avatar: '_4',
            }
        ]

    },
    // Milestone 1 (DAY 1)
    // // Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e
    //  dall’interlocutore (bianco) assegnando due classi CSS diverse
    methods: {
        getAvatarImgProfile(contact) {
            // FUNZIONE GENERAZIONE AVATARIMG
            return `img/avatar${contact.avatar}.jpg`;
        },

    }
});