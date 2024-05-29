// Create a variable to hold your NFTs
let nftCollection = [];

// Create a function to mint new NFTs
function mintNFT(name, artist, description) {
  // Create an NFT object with the provided metadata
  const nft = {
    name: name,
    artist: artist,
    description: description,
    timestamp: new Date() // Adding a timestamp for when the NFT was minted
  };
  
  // Store the new NFT in the collection
  nftCollection.push(nft);
}

// Create a function to list all NFTs
function listNFTs() {
  nftCollection.forEach((nft, index) => {
    console.log(`NFT ${index + 1}:`);
    console.log(`  Name: ${nft.name}`);
    console.log(`  Artist: ${nft.artist}`);
    console.log(`  Description: ${nft.description}`);
    console.log(`  Minted On: ${nft.timestamp}`);
    console.log('-------------------------');
  });
}

// Create a function to get the total number of NFTs
function getTotalSupply() {
  return nftCollection.length;
}

// Call your functions below this line

// Mint some NFTs with new values
mintNFT("Digital Sunrise", "Alice Smith", "A vibrant digital painting of a sunrise over a mountain range.");
mintNFT("Ocean Dreams", "Bob Johnson", "An abstract representation of the ocean with swirling blue patterns.");
mintNFT("Urban Jungle", "Cathy Lee", "A modern art piece depicting the chaotic beauty of city life.");

// List all NFTs
listNFTs();

// Print the total number of NFTs
console.log("Total NFTs Minted: " + getTotalSupply());
