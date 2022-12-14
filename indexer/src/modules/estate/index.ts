import { NFT, Estate } from '../../entities/schema'

export function buildEstateFromNFT(nft: NFT): Estate {
  let estate = new Estate(nft.id)

  estate.tokenId = nft.tokenId
  estate.owner = nft.owner
  estate.size = 0

  return estate
}

export function getEstateImage(estate: Estate): string {
  return (
    'https://api.decentraland.org/v1/estates/' +
    estate.tokenId.toString() +
    '/map.png'
  )
}
