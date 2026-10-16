// 1.)
const product = {
    prodName: "Wonder Widget",
    patentNum: 765321,
    assemblyRequired: true,
    buzzwords: ["high-tech", "labor-saving", "water-resistant"],
    company: {
        name: "Doo-Dad Incorporated",
        country: "U.S.A",
    },
    promote: function () {
        let assembly = "";

        if (this.assemblyRequired) assembly = " Some assembly required.";

        return `Announcing ${this.company.name}'s newest ${this.buzzwords[0], this.buzzwords[1], this.buzzwords[2]} ${this.prodName}! Made in ${this.company.country}. Patent Number: ${this.patentNum}. ${assembly}`
    }
};

// 2.)
console.log(product);
console.log("Assembly Required:", product.assemblyRequired);
console.log(product.buzzwords[0]);
console.log(product.buzzwords[product.buzzwords.length - 1]);
console.log(`All ${product.company.name} products are made in ${product.company.country}`);
console.log(product.promote());

// 3.)
product.msrp = 40;
product.discount = 0.2;
product.salePrice = product.msrp * (1 - product.discount);
product.caution = "Water-resistant does NOT mean waterproof. Do not submerge.";