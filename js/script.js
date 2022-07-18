
// VERIFICA COLLEGAMENTO JAVA
console.log("JS")

// VERIFICA COLLEGAMENTO VUEJS

console.log('Vue ok', Vue)
// AGGIUNGO PLUGIN
dayjs.extend(dayjs_plugin_customParseFormat);

new Vue({
    el: '#root  ',
    data: {
        user: {
            name: 'Fra Tova',
            avatar: '_2'
        },
        currentIndex: 0,
        search: "",
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    text: 'Tutto fatto!',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [{
                    date: '20/03/2020 16:30:00',
                    text: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30:55',
                    text: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                    date: '28/03/2020 10:10:40',
                    text: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '28/03/2020 10:20:10',
                    text: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    text: 'Ah scusa!',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Luiso',
                avatar: '_4',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    text: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Michele Ortolani',
                avatar: '_5',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    status: 'received'
                },
                {
                    date: '10/01/2020 16:15:22',
                    text: 'Tutto fatto!',
                    status: 'sent'
                }
                ],
            },
            {
                name: 'Giuseppina',
                avatar: '_6',
                visible: true,
                messages: [{
                    date: '20/03/2020 16:30:00',
                    text: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30:55',
                    text: 'Male, ho la febbre',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    text: 'Mi dispiace',
                    status: 'sent'
                }
                ],
            },
            {
                name: 'Giuseppe',
                avatar: '_7',
                visible: true,
                messages: [{
                    date: '28/03/2020 10:10:40',
                    text: 'Muoviti Carlo',
                    status: 'received'
                },
                {
                    date: '28/03/2020 10:20:10',
                    text: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    text: 'Ah scusa!',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Marione',
                avatar: '_8',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    text: 'Oggi c"è troppo caldo',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    text: 'Hai ragione, andiamo a fare un bagno',
                    status: 'received'
                }
                ],
            },
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

        setCurrentContact(index) {
            this.currentIndex = index;          // method che setta il currentIndex 

        },
        // Funzione per Formattare la Data
        printDate() {
            return this.date = dayjs().format('DD/MM/YY HH:mm:ss')
        },
        // Milestone 3
        // Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” 
        // il testo viene aggiunto al thread sopra, come messaggio verde
        // Risposta dall’interlocutore: ad ogni inserimento di un messaggio, 
        // l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
        // FUNZIONE INVIO MESSAGI
        sendMessage: function () {
            if (this.Inputmessagemodel != '') {
                this.contacts[this.currentIndex].messages.push({    //pusha il messaggio inserito tramite inputvModel(Pusho il nuovo Array di oggetti)
                    date: this.printDate(),  //Richiamo la funzione prinDate
                    text: (this.Inputmessagemodel),
                    status: 'sent',
                })
                this.Inputmessagemodel = '';
                // Reset HTML
            };
            this.Inputmessagemodel = this.autoMessage() //Richiamo la funzione Auto

        },

        // FUNZIONE CREAZIONE MESSAGGIO AUTOMATICO (OK)
        autoMessage: function () {
            setTimeout(() => {
                this.contacts[this.currentIndex].messages.push({
                    date: this.printDate(),  //Richiamo la funzione prinDate
                    text: 'ok',
                    status: 'received',
                })
            }, 1000);     // Ritardo di 1 secondo
        },

        //         Milestone 4
        // Ricerca utenti: scrivendo qualcosa nell’input a sinistra,
        //  vengono visualizzati solo i contatti il cui nome contiene le lettere inseriti
        // 
        //Restituisce true o false se il nome del contatto inserito è uguale e a search nell'input
        // Metodo startsWith () viene utilizzato per rilevare se la stringa inizia con il prefisso specificato.
        // FUNZIONE PER LA RICERCA DI UN Nome in Rubrica
        searchContact: function (contact) {
            if (this.search == "") {
                return true;
            }
            return contact.name.toLowerCase().startsWith(this.search.toLowerCase());
        },

    },
    computed: {}

});




