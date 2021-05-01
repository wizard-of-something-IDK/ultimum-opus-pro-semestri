Vue.component("details-modal", {
	props: {
		instrument: Object
	},
	template: "#details-modal-template"
});

Vue.component("create-modal", {
	props: {
		newInstrument: {
			type: Object,
			default: function () {
				return {
					name: "",
					type: "",
					price: "",
					brand: "",
					image: "",
					inCart: false,
					details: false
				};
			}
		}
	},
	template: "#create-modal-template"
});

new Vue({
	el: "#app",
	data: {
		showCreateModal: false,
		myCart: [],
		instruments: [
			{
				image:
					"https://upload.wikimedia.org/wikipedia/commons/1/1b/Violin_VL100.png",
				name: "Violin",
				type: "String Instrument",
				price: "299",
				brand: "Maton",
				inCart: false,
				details: false
			},
			{
				image:
					"https://usa.yamaha.com/files/STORIA-I_a_0001_1705e18e24a4908d5a4db3285d960fa8.jpg?impolicy=resize&imwid=1514&imhei=4000",
				name: "Acoustic Guitar",
				type: "Guitar",
				price: "701",
				brand: "Yamaha",
				inCart: false,
				details: false
			},
			{
				image:
					"https://www.fmicassets.com/Damroot/ZoomJpg/10001/0177512833_fen_ins_fbd_1_nr.jpg",
				name: "75th Anniversary Stratocaster",
				type: "Guitar",
				price: "849.99",
				brand: "Fender",
				inCart: false,
				details: false
			},
			{
				image:
					"https://images.eatthismuch.com/site_media/img/96103_Shamarie84_7ec2edaa-a9a2-4a56-9df8-bf497719f78e.jpeg",
				name: "Mayonaise",
				type: "Condiment",
				price: "4.99",
				brand: "Maton",
				inCart: false,
				details: false
			},
			{
				image:
					"https://www.clipartkey.com/mpngs/m/75-756026_clip-art-mouth-pictures-mouth-png-transparent.png",
				name: "Mouth",
				type: "Vocal Sound Dispenser",
				price: "49.28",
				brand: "Yamaha",
				inCart: false,
				details: false
			},
			{
				image:
					"https://ttk2.github.io/civcraftsite/assets/img/pluginicons/jukealert.png",
				name: "Jukebox",
				type: "Building Block",
				price: "6.99",
				brand: "Fender",
				inCart: false,
				details: false
			}
		]
	},
	methods: {
		addToCart: function (instrument) {
			instrument.inCart = true;
			instrument.details = false;
			this.myCart.push(instrument);
		},
		emptyCart: function () {
			this.instruments.forEach(function (instrument) {
				instrument.inCart = false;
			});
			this.myCart = [];
		},
		createInstrument: function (newInstrument) {
			var errors = [];
			if (newInstrument.name === "") {
				errors.push("Name field cannot be empty!   ");
			}
			if (newInstrument.type === "") {
				errors.push("Instrument type field cannot be empty!   ");
			}
			if (newInstrument.price < 0) {
				errors.push("Free is okay, but negative prices are not.   ");
			}
			if (newInstrument.brand === "") {
				errors.push("I need to know the brand of instrument. Please choose one of the 3 options!   ");
			}
			if (errors.length > 0) {
				alert(errors);
			} else {
				this.instruments.push(newInstrument);
				this.showCreateModal = false;
			}
		}
	}
});