import type { MintConfig } from "@/types";

const {
    COLLECTION_MINT = "",
    COLLECTION_METADATA_ACCOUNT = "",
    COLLECTION_MASTER_EDITION_ACCOUNT = "",
    SHADOW_ACCOUNT = "",
} = process.env;

export const config: MintConfig  = {
    metadata: {
        name: "OPOS Outliers",
        description: "Unlimited compressed NFT characters. Only possible on Solana, powered by TipLink.",
        symbol: "OPOSOUT",
        external_url: "https://opos.quest",
        properties: {
            files: [],
            category: "image",
        },  
    },
    
    tree: {
        publicKey: "tL2TAswGPHjtCvxN9ez5y8TDrAU1Pxh8PEVmHC8tiyy",
        createTreeTransaction: "4XDRvcPnLhCUHBuxgXLvupLkWGmUNSU5Kp9R9XmaE5Gq4n2pzCBD6FjXSbN2JPCDZxpRHbkuFWNSqf7WmfjbWZKK",
        maxBufferSize: 64,
        maxDepth: 14,
    },

    collection: {
        "collectionMint": COLLECTION_MINT,
        "collectionMetadataAccount": COLLECTION_METADATA_ACCOUNT,
        "collectionMasterEditionAccount": COLLECTION_MASTER_EDITION_ACCOUNT,
        "collectionMetadataUri": "https://shdw-drive.genesysgo.net/7J165fhor8ysTfu46LiKG76gsLzG33coqZQLqhvJYESy/1691558993463.json"
    },

    storage: {
        shadowAccount: SHADOW_ACCOUNT,
    },

    attributes: {
        "Background": {
            "Abstract": "https://raw.githubusercontent.com/matr-builders/files/main/Backgrounds/Abstract.png?id=2",
            "Blue": "https://raw.githubusercontent.com/matr-builders/files/main/Backgrounds/Blue.png?id=2",
            "Green": "https://raw.githubusercontent.com/matr-builders/files/main/Backgrounds/Green.png?id=2",
            "Grey": "https://raw.githubusercontent.com/matr-builders/files/main/Backgrounds/Grey.png?id=2",
            "Pink": "https://raw.githubusercontent.com/matr-builders/files/main/Backgrounds/Pink.png?id=2",
            "Purple": "https://raw.githubusercontent.com/matr-builders/files/main/Backgrounds/Purple.png?id=2",
            "Red": "https://raw.githubusercontent.com/matr-builders/files/main/Backgrounds/Red.png?id=2",
            "Solana": "https://raw.githubusercontent.com/matr-builders/files/main/Backgrounds/Solana.png?id=2",
            "White": "https://raw.githubusercontent.com/matr-builders/files/main/Backgrounds/White.png?id=2",
            "Yellow": "https://raw.githubusercontent.com/matr-builders/files/main/Backgrounds/Yellow.png?id=2",
        },
        "Skin Color": {
            "Human 1": "https://raw.githubusercontent.com/matr-builders/files/main/Heads/Color/Skin1.png?id=2",
            "Human 2": "https://raw.githubusercontent.com/matr-builders/files/main/Heads/Color/Skin2.png?id=2",
            "Human 3": "https://raw.githubusercontent.com/matr-builders/files/main/Heads/Color/Skin3.png?id=2",
            "Human 4": "https://raw.githubusercontent.com/matr-builders/files/main/Heads/Color/Skin4.png?id=2",
            "Human 5": "https://raw.githubusercontent.com/matr-builders/files/main/Heads/Color/Skin5.png?id=2",
            "Alien": "https://raw.githubusercontent.com/matr-builders/files/main/Heads/Color/Alien.png?id=2",
            "Zombie": "https://raw.githubusercontent.com/matr-builders/files/main/Heads/Color/Zombie.png?id=2",
            "None": "https://raw.githubusercontent.com/matr-builders/files/main/None.png?id=2",
        },
        "Face": {
            "Smile": "https://raw.githubusercontent.com/matr-builders/files/main/Heads/Faces/BasicSmile.png?id=2",
            "Cursed": "https://raw.githubusercontent.com/matr-builders/files/main/Heads/Faces/Cursed.png?id=2",
            "Duck": "https://raw.githubusercontent.com/matr-builders/files/main/Heads/Faces/Duck.png?id=2",
            "Red Laser Eyes": "https://raw.githubusercontent.com/matr-builders/files/main/Heads/Faces/LaserEyesRed.png?id=2",
            "Scarecrow": "https://raw.githubusercontent.com/matr-builders/files/main/Heads/Faces/Scarecrow.png?id=2",
            "Vampire": "https://raw.githubusercontent.com/matr-builders/files/main/Heads/Faces/Vampire.png?id=2",
            "Visor": "https://raw.githubusercontent.com/matr-builders/files/main/Heads/Faces/Visor.png?id=2",
            "Solana Viper": "https://raw.githubusercontent.com/matr-builders/files/main/Heads/Faces/SolanaViper.png?id=2",
            "TipLink Viper": "https://raw.githubusercontent.com/matr-builders/files/main/Heads/Faces/TipLinkViper.png?id=2",
            "None": "https://raw.githubusercontent.com/matr-builders/files/main/None.png?id=2",
        },
        "Head": {
            "TipLink Helmet": "https://raw.githubusercontent.com/matr-builders/files/main/Heads/Special/TippyHead.png?id=2",
            "Baby": "https://raw.githubusercontent.com/matr-builders/files/main/Heads/Hair/Hair:Hat/Baby.png?id=2",
            "Black Beanie": "https://raw.githubusercontent.com/matr-builders/files/main/Heads/Hair/Hair:Hat/BeanieBlack.png?id=2",
            "Orange Beanie": "https://raw.githubusercontent.com/matr-builders/files/main/Heads/Hair/Hair:Hat/BeanieOrange.png?id=2",
            "Solana Beanie": "https://raw.githubusercontent.com/matr-builders/files/main/Heads/Hair/Hair:Hat/BeanieSolana.png?id=2",
            "Daisy": "https://raw.githubusercontent.com/matr-builders/files/main/Heads/Hair/Hair:Hat/Daisy.png?id=2",
            "Horns": "https://raw.githubusercontent.com/matr-builders/files/main/Heads/Hair/Hair:Hat/DevilHorns.png?id=2",
            "Halo": "https://raw.githubusercontent.com/matr-builders/files/main/Heads/Hair/Hair:Hat/Halo.png?id=2",
            "Black Hat": "https://raw.githubusercontent.com/matr-builders/files/main/Heads/Hair/Hair:Hat/Hat.png?id=2",
            "Headband": "https://raw.githubusercontent.com/matr-builders/files/main/Heads/Hair/Hair:Hat/Headband.png?id=2",
            "Mohawk": "https://raw.githubusercontent.com/matr-builders/files/main/Heads/Hair/Hair:Hat/Mohawk.png?id=2",
            "None": "https://raw.githubusercontent.com/matr-builders/files/main/None.png",
        },
        "Torso": {
            "TipLink Shirt": "https://raw.githubusercontent.com/matr-builders/files/main/Torso/Shirt/White.png?id=2",
            "Black Shirt": "https://raw.githubusercontent.com/matr-builders/files/main/Torso/Shirt/Black.png?id=2",
            "Blue Shirt": "https://raw.githubusercontent.com/matr-builders/files/main/Torso/Shirt/Blue.png?id=2",
            "Gold Shirt": "https://raw.githubusercontent.com/matr-builders/files/main/Torso/Shirt/Gold.png?id=2",
            "Green Shirt": "https://raw.githubusercontent.com/matr-builders/files/main/Torso/Shirt/Green.png?id=2",
            "Grey Shirt": "https://raw.githubusercontent.com/matr-builders/files/main/Torso/Shirt/Grey.png?id=2",
            "Red Shirt": "https://raw.githubusercontent.com/matr-builders/files/main/Torso/Shirt/Red.png?id=2",
            "Solana Blue Shirt": "https://raw.githubusercontent.com/matr-builders/files/main/Torso/Shirt/SolBlue.png?id=2",
            "Solana Green Shirt": "https://raw.githubusercontent.com/matr-builders/files/main/Torso/Shirt/SolGreen.png?id=2",
            "Solana Purple Shirt": "https://raw.githubusercontent.com/matr-builders/files/main/Torso/Shirt/SolPurple.png?id=2",
            "None": "https://raw.githubusercontent.com/matr-builders/files/main/None.png",
        },
        "Logo": {
            "TipLink": "https://raw.githubusercontent.com/matr-builders/files/main/Torso/Logos/TipLink.png?id=2",
            "Helius": "https://raw.githubusercontent.com/matr-builders/files/main/Torso/Logos/Helius.png?id=2",
            "None": "https://raw.githubusercontent.com/matr-builders/files/main/None.png?id=2",
        },
        "Legs": {
            "TipLink Pants": "https://raw.githubusercontent.com/matr-builders/files/main/Legs/Pants/Blue.png?id=2",
            "Brown Pants": "https://raw.githubusercontent.com/matr-builders/files/main/Legs/Pants/Brown.png?id=2",
            "Dark Grey Pants": "https://raw.githubusercontent.com/matr-builders/files/main/Legs/Pants/DarkGrey.png?id=2",
            "Light Grey Pants": "https://raw.githubusercontent.com/matr-builders/files/main/Legs/Pants/LightGrey.png?id=2",
            "Gold Pants": "https://raw.githubusercontent.com/matr-builders/files/main/Legs/Pants/Gold.png?id=2",
            "Green Pants": "https://raw.githubusercontent.com/matr-builders/files/main/Legs/Pants/Green.png?id=2",
            "Khaki Pants": "https://raw.githubusercontent.com/matr-builders/files/main/Legs/Pants/Khaki.png?id=2",
            "Magenta Pants": "https://raw.githubusercontent.com/matr-builders/files/main/Legs/Pants/Magenta.png?id=2",
            "Red Pants": "https://raw.githubusercontent.com/matr-builders/files/main/Legs/Pants/Red.png?id=2",
            "Solana Pants": "https://raw.githubusercontent.com/matr-builders/files/main/Legs/Pants/Solana.png?id=2",
            "None": "https://raw.githubusercontent.com/matr-builders/files/main/None.png?id=2",
        },
        "Feet": {
            "TipLink Shoes": "https://raw.githubusercontent.com/matr-builders/files/main/Feet/Shoes/Grey.png?id=2",
            "Black Shoes": "https://raw.githubusercontent.com/matr-builders/files/main/Feet/Shoes/Black.png?id=2",
            "White Shoes": "https://raw.githubusercontent.com/matr-builders/files/main/Feet/Shoes/White.png?id=2",
            "Blue Shoes": "https://raw.githubusercontent.com/matr-builders/files/main/Feet/Shoes/Blue.png?id=2",
            "Gold Shoes": "https://raw.githubusercontent.com/matr-builders/files/main/Feet/Shoes/Gold.png?id=2",
            "Green Shoes": "https://raw.githubusercontent.com/matr-builders/files/main/Feet/Shoes/Green.png?id=2",
            "Red Shoes": "https://raw.githubusercontent.com/matr-builders/files/main/Feet/Shoes/Red.png?id=2",
            "Solana Blue Shoes": "https://raw.githubusercontent.com/matr-builders/files/main/Feet/Shoes/SolBlue.png?id=2",
            "Solana Green Shoes": "https://raw.githubusercontent.com/matr-builders/files/main/Feet/Shoes/SolGreen.png?id=2",
            "Solana Purple Shoes": "https://raw.githubusercontent.com/matr-builders/files/main/Feet/Shoes/SolPurple.png?id=2",
            "None": "https://raw.githubusercontent.com/matr-builders/files/main/None.png?id=2",
        },
    },
}