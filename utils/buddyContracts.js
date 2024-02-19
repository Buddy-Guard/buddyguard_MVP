// import {ethers} from 'ethers';

// const contractAddress = '0x305bfBBE058aaCD760E7d6D611dbF780e25b5680';

// const contractABI = [
//   'function createOrder(address _token, address[] calldata _guardians, uint256 _payment) external',
// ];

// const tokenAbi = [
//   'function approve(address spender, uint256 amount) external returns (bool)',
// ];

// let provider;
// let signer;

// provider = new ethers.providers.JsonRpcProvider(
//   'https://avalanche-fuji.infura.io/v3/p9vQ+IAkYt8+hFXYpNMt9vVXJGZP0A8cNqS4nsDFABdON+YJkRywNQ',
// );

// let wallet = new ethers.Wallet(process.env.PRIVATE_KEY_User, provider);

// const contract = new ethers.Contract(contractAddress, contractABI, signer);

// async function createOrder(token: string, stake: number) {
//   const overrides = {
//     gasLimit: ethers.utils.hexlify(1000000), // 1 million gas
//   };
//   const tx = await contract.createOrder(token, stake, overrides);
//   const receipt = await tx.wait();
//   console.log(tx);
// }

// async function addGuardian(orderId: number, guardian: string) {
//   const overrides = {
//     gasLimit: ethers.utils.hexlify(1000000), // 1 million gas
//   };
//   const tx = await contract.addGuardian(orderId, guardian, overrides);
//   const receipt = await tx.wait();
//   console.log(tx);
// }

// async function cancelOrder(orderId: number) {
//   const overrides = {
//     gasLimit: ethers.utils.hexlify(1000000), // 1 million gas
//   };
//   const tx = await contract.cancelOrder(orderId, overrides);
//   const receipt = await tx.wait();
//   console.log(tx);
// }

// async function trigExpiredOrder(orderId: number) {
//   const overrides = {
//     gasLimit: ethers.utils.hexlify(1000000), // 1 million gas
//   };
//   const tx = await contract.trigExpiredOrder(orderId, overrides);
//   const receipt = await tx.wait();
//   console.log(tx);
// }

// export {createOrder, addGuardian, cancelOrder, trigExpiredOrder};
