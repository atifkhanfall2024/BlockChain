 function Blockchain(){

    // in  chain all the new mines block come here and added 
    this.chain = [] ;

    // when we make a transaction then it cannot directly goes to block it firslty goes to pending transaction after miners mines the block this pending tracsactions are verified and added to block and the pending transaction become empty for coming transaction 

    this.pendingTransaction=  [] ;
 }

 Blockchain.prototype.createBlock = function(Nounce , Pervioushash , Hash){
   
    // Nounce value is used for proof of work 
    // Every block have its blocknumber , timestemp , hash , phash , nounce , transaction 

     const newBlock = {

        index : this.chain.length+1 ,
        timestemp: new Date() ,
        Nounce :  Nounce ,
        Pervioushash:Pervioushash ,
        Hash:Hash ,
        transactions: this.pendingTransaction
     }

     // when we push all pending  transaction to transaction then our pending transaction is empty for next coming transactions
     this.pendingTransaction = []
     this.chain.push(newBlock)
     
     return newBlock
 }


module.exports = Blockchain
