import { Transfer, ENSToken } from '../generated/ENSToken/ENSToken'
import { TransferEvent } from '../generated/schema'

export function handleTransfer(event: Transfer): void {
  // Create a new TransferEvent entity based on the transaction hash of the event
  // let ...

  // Populate transferEvent fields based on event metadata
  // transferEvent.timestamp = 


  // Use the balanceOf public read-only function of the ENSToken 
  // contract to query the balance of the "from" and "to" addresses
  // and polulate the fromBalance and toBalance fields
  // Note that you'll have to bind the ENSToken contract to the address
  // that emitted the event     
  // Check this section in The Graph docs:
  // https://thegraph.com/docs/developer/assemblyscript-api#access-to-smart-contract-state
  

  // Save the entity to the store
    
}
