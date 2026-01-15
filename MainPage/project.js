
// Sample products data
function randomPrice() {
    return Math.floor(Math.random() * (19000 - 5000 + 1)) + 5000;
}

function getDiscountPercent(currentPrice, originalPrice) {
    return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
}
const saleProducts = [
    { id: 1, name: 'White T-shirt with Red Stripes (Basic)', price: randomPrice(), originalPrice: 20000, description: '100% cotton, relaxed fit', img: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'ao', stock: 2, sold: 156 },
    { id: 2, name: 'Blue Wide-Leg Jeans', price: randomPrice(), originalPrice: 20000, description: 'Stretch denim, Korean style', img: 'https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'quan', stock: 1, sold: 143 },
    { id: 3, name: 'Black Jacket', price: randomPrice(), originalPrice: 20000, description: 'Lightweight, good sun protection', img: 'https://plus.unsplash.com/premium_photo-1673356301340-4522591be5f7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'aokhoac', stock: 2, sold: 128 },
    { id: 4, name: 'Gray Hoodie', price: randomPrice(), originalPrice: 20000, description: 'Soft fleece, warm', img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'aokhoac', stock: 1, sold: 198 },
    { id: 5, name: 'Yellow Shorts', price: randomPrice(), originalPrice: 20000, description: 'Breathable, ideal for summer', img: 'https://images.unsplash.com/photo-1649566650740-cb0a625e1b40?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'quan', stock: 10, sold: 87 },
    { id: 6, name: 'White Polo Shirt', price: randomPrice(), originalPrice: 20000, description: 'Smart, easy to style', img: 'https://plus.unsplash.com/premium_photo-1673356301535-2cc45bcc79e4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'ao', stock: 10, sold: 134 },
    { id: 7, name: 'Black Bomber Jacket', price: randomPrice(), originalPrice: 20000, description: 'Street style', img: 'https://plus.unsplash.com/premium_photo-1673356301340-4522591be5f7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'aokhoac', stock: 1, sold: 176 },
    { id: 8, name: 'Gray Jogger Pants', price: randomPrice(), originalPrice: 20000, description: 'Sporty, active', img: 'https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'quan', stock: 10, sold: 92 },
    { id: 9, name: 'White Dress Shirt', price: randomPrice(), originalPrice: 20000, description: 'Slim fit, office wear', img: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'ao', stock: 10, sold: 156 },
    { id: 10, name: 'White Hoodie', price: randomPrice(), originalPrice: 20000, description: 'Soft fleece, warm', img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'aokhoac', stock: 1, sold: 198 },
    { id: 11, name: 'Graphic Unisex T-shirt', price: randomPrice(), originalPrice: 20000, description: 'Unique print, streetwear style', img: 'https://plus.unsplash.com/premium_photo-1673356301535-2cc45bcc79e4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'ao', stock: 10, sold: 245 },
    { id: 12, name: 'Black Skinny Jeans', price: randomPrice(), originalPrice: 20000, description: 'Figure-hugging, flattering', img: 'https://images.unsplash.com/photo-1649566650740-cb0a625e1b40?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'quan', stock: 10, sold: 231 },
    { id: 13, name: 'Gray Hoodie Jacket', price: randomPrice(), originalPrice: 20000, description: 'Relaxed fit, easy to pair', img: 'https://plus.unsplash.com/premium_photo-1673356301340-4522591be5f7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'aokhoac', stock: 10, sold: 218 },
    { id: 14, name: "Men's White Polo", price: randomPrice(), originalPrice: 20000, description: 'Smart for office environment', img: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'ao', stock: 10, sold: 203 },
    { id: 15, name: 'Gray Baggy Pants', price: randomPrice(), originalPrice: 20000, description: '2024 fashion trend', img: 'https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'quan', stock: 10, sold: 198 },
    { id: 16, name: 'Denim Shirt', price: randomPrice(), originalPrice: 20000, description: 'Soft, durable denim', img: 'https://plus.unsplash.com/premium_photo-1673356301535-2cc45bcc79e4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'ao', stock: 10, sold: 187 },
    { id: 17, name: '2-Layer Windbreaker Jacket', price: randomPrice(), originalPrice: 20000, description: 'Waterproof, windproof', img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'aokhoac', stock: 10, sold: 176 },
    { id: 18, name: 'Khaki Shorts', price: randomPrice(), originalPrice: 20000, description: 'Comfortable, summer active', img: 'https://images.unsplash.com/photo-1649566650740-cb0a625e1b40?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'quan', stock: 10, sold: 165 },
    { id: 19, name: 'Oversized T-shirt', price: randomPrice(), originalPrice: 20000, description: 'Trendy oversized fit, unisex', img: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'ao', stock: 10, sold: 154 },
    { id: 20, name: 'Cardigan Jacket', price: randomPrice(), originalPrice: 20000, description: 'Warm, elegant', img: 'https://plus.unsplash.com/premium_photo-1673356301340-4522591be5f7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'aokhoac', stock: 10, sold: 143 },

];
const bestSellingProducts = [
    { id: 11, name: 'Graphic Unisex T-shirt', price: randomPrice(), originalPrice: 20000, description: 'Unique print, streetwear style', img: 'https://plus.unsplash.com/premium_photo-1673356301535-2cc45bcc79e4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'ao', stock: 10, sold: 245 },
    { id: 12, name: 'Black Skinny Jeans', price: randomPrice(), originalPrice: 20000, description: 'Figure-hugging, flattering', img: 'https://images.unsplash.com/photo-1649566650740-cb0a625e1b40?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'quan', stock: 10, sold: 231 },
    { id: 13, name: 'Gray Hoodie Jacket', price: randomPrice(), originalPrice: 20000, description: 'Relaxed fit, easy to pair', img: 'https://plus.unsplash.com/premium_photo-1673356301340-4522591be5f7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'aokhoac', stock: 10, sold: 218 },
    { id: 203, name: 'Baggy Jeans', price: 20000, desc: 'Oversized trendy style', img: 'https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', images: ['https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1649566650740-cb0a625e1b40?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'] },
    { id: 204, name: 'Ripped Knee Jeans', price: 20000, desc: 'Edgy, dynamic', img: 'https://images.unsplash.com/photo-1649566650740-cb0a625e1b40?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', images: ['https://images.unsplash.com/photo-1649566650740-cb0a625e1b40?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'] },
    { id: 14, name: "Men's White Polo", price: randomPrice(), originalPrice: 20000, description: 'Smart for office environment', img: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'ao', stock: 10, sold: 203 },
    { id: 15, name: 'Gray Baggy Pants', price: 20000, description: '2024 fashion trend', img: 'https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'quan', stock: 10, sold: 198 },
    { id: 16, name: 'Denim Shirt', price: randomPrice(), originalPrice: 20000, description: 'Soft, durable denim', img: 'https://plus.unsplash.com/premium_photo-1673356301535-2cc45bcc79e4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'ao', stock: 10, sold: 187 },
    { id: 17, name: '2-Layer Windbreaker Jacket', price: 20000, description: 'Waterproof, windproof', img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'aokhoac', stock: 10, sold: 176 },
    { id: 18, name: 'Khaki Shorts', price: randomPrice(), originalPrice: 20000, description: 'Comfortable, summer active', img: 'https://images.unsplash.com/photo-1649566650740-cb0a625e1b40?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'quan', stock: 10, sold: 165 },
    { id: 19, name: 'Oversized T-shirt', price: randomPrice(), originalPrice: 20000, description: 'Trendy oversized fit, unisex', img: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'ao', stock: 10, sold: 154 },
    { id: 20, name: 'Cardigan Jacket', price: randomPrice(), originalPrice: 20000, description: 'Warm, elegant', img: 'https://plus.unsplash.com/premium_photo-1673356301340-4522591be5f7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'aokhoac', stock: 10, sold: 143 },
    { id: 21, name: 'Red-Black Jacket with Hood', price: 20000, description: 'Thick material, eye-catching color mix', img: 'https://plus.unsplash.com/premium_photo-1673356301340-4522591be5f7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', images: ['https://plus.unsplash.com/premium_photo-1673356301340-4522591be5f7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'] },
    { id: 22, name: 'Olive Bomber Jacket', price: 20000, description: 'Youthful style, suitable for school', img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', images: ['https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://plus.unsplash.com/premium_photo-1673356301340-4522591be5f7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'] }
];
const allProducts = {
    aokhoac: [
        { id: 3, name: 'Black Jacket', price: randomPrice(), originalPrice: 20000, description: 'Lightweight, good sun protection', img: 'https://plus.unsplash.com/premium_photo-1673356301340-4522591be5f7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'aokhoac', stock: 2, sold: 128 },
        { id: 4, name: 'Gray Hoodie', price: randomPrice(), originalPrice: 20000, description: 'Soft fleece, warm', img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'aokhoac', stock: 1, sold: 198 },
        { id: 101, name: 'Red-Black Jacket with Hood', price: 20000, description: 'Thick material, eye-catching color mix', img: 'https://plus.unsplash.com/premium_photo-1673356301340-4522591be5f7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', images: ['https://plus.unsplash.com/premium_photo-1673356301340-4522591be5f7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'] },
        { id: 102, name: 'Olive Bomber Jacket', price: 20000, description: 'Youthful style, suitable for school', img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', images: ['https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://plus.unsplash.com/premium_photo-1673356301340-4522591be5f7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'] },
        { id: 103, name: 'Vintage Denim Jacket', price: 20000, description: 'Classic, fashionable', img: 'https://plus.unsplash.com/premium_photo-1673356301340-4522591be5f7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', images: ['https://plus.unsplash.com/premium_photo-1673356301340-4522591be5f7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'] },
        { id: 104, name: 'Black Hoodie Jacket', price: 20000, description: 'Warm, comfortable', img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', images: ['https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://plus.unsplash.com/premium_photo-1673356301340-4522591be5f7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'] },
        { id: 106, name: 'Sport Windbreaker', price: 20000, description: 'Lightweight, active', img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', images: ['https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://plus.unsplash.com/premium_photo-1673356301340-4522591be5f7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'] }
    ],
    quan: [
        { id: 201, name: 'Men Black Jeans', price: 20000, description: 'Slimfit, slightly stretchy', img: 'https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', images: ['https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1649566650740-cb0a625e1b40?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'] },
        { id: 202, name: 'Women Blue Wash Jeans', price: 20000, description: 'Youthful cut', img: 'https://images.unsplash.com/photo-1649566650740-cb0a625e1b40?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', images: ['https://images.unsplash.com/photo-1649566650740-cb0a625e1b40?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'] },
        { id: 203, name: 'Baggy Jeans', price: 20000, description: 'Oversized trendy style', img: 'https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', images: ['https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1649566650740-cb0a625e1b40?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'] },
        { id: 204, name: 'Ripped Knee Jeans', price: 20000, description: 'Edgy, dynamic', img: 'https://images.unsplash.com/photo-1649566650740-cb0a625e1b40?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', images: ['https://images.unsplash.com/photo-1649566650740-cb0a625e1b40?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'] },
        { id: 205, name: 'Wide-Leg Jeans', price: 20000, description: 'Comfortable, easy to style', img: 'https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', images: ['https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1649566650740-cb0a625e1b40?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'] },
        { id: 206, name: 'Skinny Jeans', price: 20000, description: 'Figure-hugging, flattering', img: 'https://images.unsplash.com/photo-1649566650740-cb0a625e1b40?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', images: ['https://images.unsplash.com/photo-1649566650740-cb0a625e1b40?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'] }
    ],
    ao: [
        { id: 301, name: 'White Basic T-shirt', price: 20000, description: 'Cotton tee, breathable', img: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', images: ['https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://plus.unsplash.com/premium_photo-1673356301535-2cc45bcc79e4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'] },
        { id: 302, name: 'Graphic Unisex T-shirt', price: 20000, description: 'Bold print', img: 'https://plus.unsplash.com/premium_photo-1673356301535-2cc45bcc79e4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', images: ['https://plus.unsplash.com/premium_photo-1673356301535-2cc45bcc79e4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'] },
        { id: 303, name: 'Polo Shirt', price: 20000, description: 'Smart, elegant', img: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', images: ['https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://plus.unsplash.com/premium_photo-1673356301535-2cc45bcc79e4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'] },
        { id: 304, name: 'Oversize T-shirt', price: 20000, description: 'Roomy, comfortable', img: 'https://plus.unsplash.com/premium_photo-1673356301535-2cc45bcc79e4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', images: ['https://plus.unsplash.com/premium_photo-1673356301535-2cc45bcc79e4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'] },
        { id: 305, name: 'Sports T-shirt', price: 20000, description: 'Good moisture wicking', img: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', images: ['https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://plus.unsplash.com/premium_photo-1673356301535-2cc45bcc79e4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'] },
        { id: 306, name: 'Crop Top', price: 20000, description: 'Feminine style', img: 'https://plus.unsplash.com/premium_photo-1673356301535-2cc45bcc79e4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', images: ['https://plus.unsplash.com/premium_photo-1673356301535-2cc45bcc79e4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'] }
    ]
};

const vouchers = [
    { code: 'WELCOME10', discount: 10, description: '10% off for first order' },
    { code: 'S50', discount: 50000, description: '50,000 VND off orders from 1,000,000 VND' },
    { code: 'SALE20', discount: 20, description: '20% off up to 500,000 VND' }
];
let currentUser = null;
let selectedVoucher = null;
let cart = [];
// Scroll function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (sectionId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// render sale products
function renderSaleProducts() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    grid.innerHTML = saleProducts.map((product, index) => {
        // dícount
        const discountPercent = product.originalPrice
            ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
            : 0;

        // only for products with discount
        const discountBadge = discountPercent > 0 ? `
            <div class="discount-badge">
                <img src="../images/fire.gif" alt="Hot" class="fire-icon">
                <span>-${discountPercent}%</span>
            </div>
        ` : '';

        return `
            <div class="product-card" style="animation-delay: ${index * 0.1}s">
                <div class="product-image">
                    <img src="${product.img}" 
                         alt="${product.name}"
                         loading="lazy"
                         onerror="this.src='images/no-image.jpg'">
                    ${discountBadge}
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-desc">${product.description || 'High-quality product'}</p>
                    <div class="price-group">
                        <span class="current-price">${product.price.toLocaleString('vi-VN')} VND</span>
                        ${product.originalPrice ?
                `<span class="old-price">${product.originalPrice.toLocaleString('vi-VN')} VND</span>`
                : ''
            }
                    </div>
                    <div class="product-actions">
                        <button class="btn btn-primary" onclick="addToCart(${product.id})"><i class="fas fa-shopping-cart me-2"></i>Add to cart</button>
                        <button class="btn btn-secondary" onclick="showProductDetail(${product.id})">Details</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

//render best selling
function renderBestSelling() {
    const carouselInner = document.getElementById('bestSellingCarouselInner');
    const indicators = document.getElementById('bestSellingIndicators');
    if (!carouselInner || !indicators) return;

    const itemsPerSlide = 4;
    let htmlSlides = '';
    let htmlIndicators = '';

    for (let i = 0; i < bestSellingProducts.length; i += itemsPerSlide) {
        const slideProducts = bestSellingProducts.slice(i, i + itemsPerSlide);
        const isActive = i === 0 ? 'active' : '';

        //  indicator
        htmlIndicators += `
            <button type="button" data-bs-target="#bestSellingCarousel" 
                    data-bs-slide-to="${i / itemsPerSlide}" 
                    ${isActive ? 'class="active"' : ''} 
                    aria-label="Slide ${i / itemsPerSlide + 1}"></button>
        `;

        //  slide
        htmlSlides += `
            <div class="carousel-item ${isActive}">
                <div class="row g-4 justify-content-center">
                    ${slideProducts.map(product => {
            const discount = product.originalPrice
                ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
                : 0;

            return `
                            <div class="col-6 col-md-4 col-lg-3">
                                <div class="card h-100 shadow-sm border-0 hover-shadow">
                                    <div class="position-relative">
                                        <img src="${product.img}" class="card-img-top" alt="${product.name}" style="height: 280px; object-fit: cover;">
                                        ${discount > 0 ? `
                                            <span class="position-absolute top-0 end-0 bg-danger text-white px-2 py-1 rounded-start small">
                                                -${discount}%
                                            </span>
                                        ` : ''}
                                        <span class="position-absolute top-0 start-0 bg-warning text-dark px-2 py-1 rounded-end small">
                                            Sold ${product.sold || 0}
                                        </span>
                                    </div>
                                    <div class="card-body d-flex flex-column">
                                        <h6 class="card-title text-truncate">${product.name}</h6>
                                        <p class="text-muted small flex-grow-1">${product.description || product.desc || ''}</p>
                                        <div class="mt-auto">
                                            <div class="d-flex justify-content-between align-items-center mb-2">
                                                <strong class="text-danger fs-5">${product.price.toLocaleString('vi-VN')} VND</strong>
                                                ${product.originalPrice ? `<del class="text-muted small">${product.originalPrice.toLocaleString('vi-VN')} VND</del>` : ''}
                                            </div>
                                            <button class="btn btn-primary add-to-cart-btn" onclick="addToCart(${product.id})">
                                               <i class="fas fa-shopping-cart me-2"></i> Add to cart
                                            </button>
                                            <button class="btn btn-secondary" onclick="showProductDetail(${product.id})">Details</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
        }).join('')}
                </div>
            </div>
        `;
    }

    carouselInner.innerHTML = htmlSlides;
    indicators.innerHTML = htmlIndicators;
}

let categorizedProducts = {
    aokhoac: [],
    quan: [],
    ao: []
};
let allProductsList = [];

// sum all products from all sources
function buildCategorizedProducts() {
    
    categorizedProducts = { ao: [], quan: [], aokhoac: [] };
    allProductsList = [];

    const sources = [saleProducts, bestSellingProducts, ...Object.values(allProducts)];

    sources.forEach(source => {
        if (Array.isArray(source)) {
            source.forEach(product => {
              
                if (product.category === 'ao') categorizedProducts.ao.push(product);
                else if (product.category === 'quan') categorizedProducts.quan.push(product);
                else if (product.category === 'aokhoac') categorizedProducts.aokhoac.push(product);

             
                if (!allProductsList.some(p => p.id === product.id)) {
                    allProductsList.push(product);
                }
            });
        }
    });
}


// render for tabs
function renderAllProductsTabs() {
    buildCategorizedProducts();

    const containers = {
        aokhoac: document.getElementById('aokhoac-products'),
        quan: document.getElementById('quan-products'),
        ao: document.getElementById('ao-products')
    };

    Object.values(containers).forEach(c => c && (c.innerHTML = ''));

    Object.entries(categorizedProducts).forEach(([category, items]) => {
        const container = containers[category];
        if (!container || items.length === 0) {
            if (container) container.innerHTML = '<p class="text-center text-muted py-5">No products available</p>';
            return;
        }

        const html = items.map(product => {
            const originalPrice = product.originalPrice || 20000;
            const currentPrice = product.price || 20000;
            const hasDiscount = currentPrice < originalPrice;
            const discountPercent = hasDiscount ? Math.round(((originalPrice - currentPrice) / originalPrice) * 100) : 0;

            return `
                <div class="product-horizontal-card mb-3 rounded-3 border p-3 bg-white shadow-sm">
                    <div class="row g-3 align-items-center">
                        <div class="col-4 col-md-3">
                            <img src="${product.img || 'https://via.placeholder.com/150'}" 
                                 class="img-fluid rounded" style="height:120px; object-fit:cover; width:100%;">
                        </div>
                        <div class="col-8 col-md-9">
                            <h6 class="mb-1 fw-bold text-dark">${product.name}</h6>
                            <p class="text-muted small mb-2">${product.description || product.desc || 'High quality, great fit'}</p>
                            
                            <div class="d-flex align-items-center gap-2 mb-3">
                                ${hasDiscount ? `<span class="badge bg-danger fs-6"><img src="../images/fire.gif" style="width:16px;height:16px;" class="me-1"> -${discountPercent}%</span>` : ''}
                                <span class="badge bg-warning text-dark">Sold ${product.sold || Math.floor(Math.random() * 500 + 100)}</span>
                            </div>

                            <div class="d-flex align-items-center justify-content-between">
                                <div>
                                    <strong class="text-danger fs-5">${currentPrice.toLocaleString('vi-VN')} VND</strong>
                                    ${hasDiscount ? `<del class="text-muted ms-2 small">${originalPrice.toLocaleString('vi-VN')} VND</del>` : ''}
                                </div>
                                <button class="btn btn-primary add-to-cart-btn " onclick="addToCart(${product.id})">
                                   <i class="fas fa-shopping-cart me-2"></i> Add
                                </button>
                                <button class="btn btn-secondary btn-sm product-detail-btn" onclick="showProductDetail(${product.id})">Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        container.innerHTML = html;
    });
}
// change img when change tab
document.addEventListener('DOMContentLoaded', function () {
    const tabButtons = document.querySelectorAll('#productTabs button');
    const displayImage = document.getElementById('category-display-image');

    const categoryImages = {
        'aokhoac-tab': 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400',
        'quan-tab': 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400',
        'aothun-tab': 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400'
    };

    tabButtons.forEach(button => {
        button.addEventListener('shown.bs.tab', function (e) {
            const tabId = e.target.id;
            if (displayImage && categoryImages[tabId]) {
                displayImage.src = categoryImages[tabId];
            }
        });
    });
});

// open category when click dropdown item 
function openCategoryModal(category) {
    const modal = document.getElementById('categoryModal');
    const titleMap = {
        aokhoac: 'Jackets',
        quan: 'Pants',
        ao: 'Shirts'
    };

    document.getElementById('categoryTitle').textContent = titleMap[category];
    renderCategoryModalProducts(category);
    modal.style.display = 'flex';
}

function closeCategoryModal() {
    document.getElementById('categoryModal').style.display = 'none';
}
// render products in category modal
function renderCategoryModalProducts(categoryKey) {
    const grid = document.getElementById('categoryProductsGrid');
    const items = categorizedProducts[categoryKey] || [];

    if (items.length === 0) {
        grid.innerHTML = '<p class="text-center py-5 text-muted fs-4">No products available</p>';
        return;
    }

    grid.innerHTML = items.map(product => {
        const price = product.price || 20000;
        const originalPrice = product.originalPrice || price;
        const discount = originalPrice > price ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

        return `
        

                <div class="category-product-item" onclick=" style="cursor:pointer;">
                    <img src="${product.img}" class="card-img-top" style="height:200px; object-fit:cover;">
                    ${discount > 0 ? `<span class="position-absolute top-0 end-0 bg-danger text-white px-2 py-1 rounded-start small">-${discount}%</span>` : ''}
                    <div class="card-body d-flex flex-column">
                        <h6 class="card-title text-truncate">${product.name}</h6>
                        <p class="text-muted small flex-grow-1">${product.description || product.desc || 'High quality'}</p>
                        <div class="mt-auto">
                            <strong class="text-danger fs-5">${price.toLocaleString('vi-VN')} VND</strong>
                            ${discount > 0 ? ` <del class="text-muted small ms-2">${originalPrice.toLocaleString('vi-VN')} VND</del>` : ''}
                            <button class="btn btn-primary btn-sm w-100 mt-2" onclick="event.stopPropagation(); addToCart(${product.id})">
                               <i class="fas fa-shopping-cart me-2"></i> Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            
        `;
    }).join('');
}
 
// Product Detail Modal
function showProductDetail(productId, category) {
    
    if (allProductsList.length === 0) {
        buildCategorizedProducts();
    }

    const product = allProductsList.find(p => p.id === productId);

    if (!product) {
        showNotification('Product does not exist!', 'error');
        return;
    }

    const modal = document.getElementById('productDetailModal');
    if (!modal) return;

    document.getElementById('detailName').textContent = product.name;
    document.getElementById('detailDesc').textContent = product.description || product.desc || 'No description available';

    const price = product.price || 20000;
    const originalPrice = product.originalPrice || price;
    const discount = originalPrice > price 
        ? Math.round(((originalPrice - price) / originalPrice) * 100)
        : 0;

    document.getElementById('detailPrice').innerHTML = `
        <strong class="text-danger fs-3">${price.toLocaleString('vi-VN')} VND</strong>
        ${discount > 0 ? `<del class="text-muted ms-3 fs-5">${originalPrice.toLocaleString('vi-VN')} VND</del>` : ''}
        ${discount > 0 ? `<span class="badge bg-danger ms-2 fs-5">-${discount}%</span>` : ''}
    `;

    
    const imagesContainer = document.getElementById('product-images');
    const images = product.images || [product.img];
    imagesContainer.innerHTML = images.map(img => `
        <img src="${img}" class="img-fluid rounded shadow mb-3" 
             style="width:100%; max-height:400px; object-fit:cover; display:block; margin:0 auto;"
             onclick="this.style.transform='scale(1.1)'; setTimeout(()=>this.style.transform='scale(1)', 300)">
    `).join('');

  
    window.currentDetailId = productId;
    window.currentDetailId = productId;

    modal.style.display = 'flex';
}
// close product detail modal
function closeProductDetail() {
    const modal = document.getElementById('productDetailModal');
    document.getElementById('productDetailModal').style.display = 'none';
}
// Load cart from local
function loadCart() {
    localStorage.removeItem('si20k_cart');
    const savedCart = localStorage.getItem('si20k_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
    updateCartUI();
}

// save cart localStorage
function saveCart() {
    localStorage.setItem('si20k_cart', JSON.stringify(cart));
}

// update cart UI
function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const floatingCount = document.getElementById('floatingCartCount');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    if (cartCount) cartCount.textContent = totalItems;
    if (floatingCount) floatingCount.textContent = totalItems;
}

// add to cart
function addToCart(productId) {

    
    if (allProductsList.length === 0) {
        buildCategorizedProducts();
    }

    const product = allProductsList.find(p => p.id === productId);

    if (!product) {
        showNotification('Product does not exist!', 'error');
        return;
    }

    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity += 1;
        showNotification(`Increased quantity: ${product.name}`, 'success');
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price || 20000,
            img: product.img,
            quantity: 1
        });
        showNotification(`Added: ${product.name}`, 'success');
    }

    saveCart();
    updateCartUI();
    
}
// add from detail modal
function addToCartFromDetail() {
    if (!window.currentDetailId) {
        showNotification('Error: Unable to identify product!', 'error');
        return;
    }

    addToCart(window.currentDetailId);  
    showNotification('Added to cart!', 'success');
}
// cart total calculation with voucher
function updateCartTotal() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    let discount = 0;

    if (selectedVoucher) {
        if (selectedVoucher.discount > 100) {
            discount = selectedVoucher.discount;
        } else {
            discount = subtotal * (selectedVoucher.discount / 100);
            if (discount > 500000) discount = 500000;
        }
    }

    const total = subtotal - discount;
    const earnPoints = Math.floor(total / 1000);

    document.getElementById('subtotal').textContent = subtotal.toLocaleString('vi-VN') + ' VND';
    document.getElementById('discount').textContent = '-' + discount.toLocaleString('vi-VN') + ' VND';
    document.getElementById('cartTotal').textContent = total.toLocaleString('vi-VN') + ' VND';
    document.getElementById('earnPoints').textContent = earnPoints;

    if (currentUser) {
        document.getElementById('cartUserPoints').textContent = currentUser.points;
    }

    document.getElementById('discountRow').style.display = discount > 0 ? 'flex' : 'none';
}
// render card items
// show items in cart
function renderCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: #999;">
                <i class="fas fa-shopping-cart" style="font-size: 4rem; margin-bottom: 1rem;"></i>
                <p style="font-size: 1.2rem;">Cart is empty</p>
                <p>Please add products to your cart!</p>
            </div>
        `;
        document.getElementById('pointsDisplay').style.display = 'none';
        return;
    }

    // show points of user
    if (currentUser) {
        document.getElementById('pointsDisplay').style.display = 'block';
    }

    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item" style="display: flex; gap: 1rem; padding: 1rem; border-bottom: 1px solid #eee; align-items: center;">
            <img src="${item.img}" alt="${item.name}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 8px;">
            <div style="flex: 1;">
                <h4 style="margin: 0 0 0.5rem 0; font-size: 1rem;">${item.name}</h4>
                <p style="margin: 0; color: #e74c3c; font-weight: bold;">${item.price.toLocaleString('vi-VN')} VND</p>
            </div>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
                <button onclick="changeQuantity(${item.id}, -1)" class="btn btn-sm btn-outline-secondary">-</button>
                <span style="min-width: 30px; text-align: center; font-weight: bold;">${item.quantity}</span>
                <button onclick="changeQuantity(${item.id}, 1)" class="btn btn-sm btn-outline-secondary">+</button>
            </div>
            <button onclick="removeFromCart(${item.id})" class="btn btn-sm btn-danger">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');

    updateCartTotal();
    renderVouchers();
}

// change quantity of item in cart
function changeQuantity(productId, change) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveCart();
        renderCartItems();
    }
}
// render vouchers in cart
function renderVouchers() {
    if (!currentUser) return;

    const voucherList = document.getElementById('voucherList');
    voucherList.innerHTML = '<h4 style="margin: 1rem 0 0.5rem 0; font-size: 0.9rem;">Available vouchers:</h4>' +
        vouchers.map(v => `
                    <div class="voucher-item ${selectedVoucher?.code === v.code ? 'selected' : ''}" 
                         onclick="selectVoucher('${v.code}')">
                        <div style="font-weight: bold; margin-bottom: 0.3rem;">
                            ${v.code} - ${v.discount > 100 ? v.discount.toLocaleString('vi-VN') + ' VND' : v.discount + '%'}
                        </div>
                        <div style="font-size: 0.85rem; opacity: 0.8;">${v.description}</div>
                    </div>
                `).join('');
}
// use voucher
function applyVoucher() {
    const code = document.getElementById('voucherInput').value.toUpperCase();
    const voucher = vouchers.find(v => v.code === code);

    if (voucher) {
        selectedVoucher = voucher;
        updateCartTotal();
        renderVouchers();
        document.getElementById('voucherInput').value = '';
        showNotification('Voucher applied successfully!', 'success');
    } else {
        showNotification('Invalid voucher code!', 'error');
    }
}
// choose voucher
function selectVoucher(code) {
    const voucher = vouchers.find(v => v.code === code);
    if (selectedVoucher?.code === code) {
        selectedVoucher = null;
        showNotification('Voucher deselected', 'success');
    } else {
        selectedVoucher = voucher;
        showNotification('Voucher applied ' + code, 'success');
    }

    renderVouchers();
}
// remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    renderCartItems();
    saveCart();
    showNotification('Removed product from cart', 'success');
}
// toggle cart modal
function toggleCart() {
    const modal = document.getElementById('cartModal');
    if (modal.style.display === 'flex') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'flex';
        updateCartUI();
        renderCartItems();
    }
}
// show notification
function showNotification(message, type = 'success') {
    const notif = document.getElementById('notification');
    notif.textContent = message;
    notif.className = `notification ${type} show`;
    setTimeout(() => {
        notif.classList.remove('show');
    }, 3000);
}
// AuthModal
function showAuthModal() {
    document.getElementById('authModal').style.display = 'flex';
}

function closeAuthModal() {
    const modal = document.getElementById('authModal');
    document.getElementById('authModal').style.display = 'none';
}
// login and sign up 
function switchTab(tab) {
    const tabs = document.querySelectorAll('.auth-tab');
    const forms = document.querySelectorAll('.auth-form');

    tabs.forEach(t => t.classList.remove('active'));
    forms.forEach(f => f.classList.remove('active'));

    if (tab === 'login') {
        tabs[0].classList.add('active');
        document.getElementById('loginForm').classList.add('active');
    } else {
        tabs[1].classList.add('active');
        document.getElementById('registerForm').classList.add('active');
    }
}
// login
function handleLogin(e) {
    e.preventDefault();
    const email = e.target[0].value.toLowerCase().trim();
    const password = e.target[1].value;

    // default accounts
    if (email === 'guest' && password === '123') {
        currentUser = {
            name: 'Guest User',
            email: 'guest@si20k.com',
            points: 1500,
            role: 'guest'
        };
        updateUserUI();
        closeAuthModal();
        showNotification('Login successful! Welcome Guest', 'success');
        e.target.reset();
        return;
    }

    if (email === 'admin' && password === '123') {
        currentUser = {
            name: 'Administrator',
            email: 'admin@si20k.com',
            points: 5000,
            role: 'admin'
        };
        updateUserUI();
        closeAuthModal();
        showNotification('Login successful! Welcome Admin', 'success');
        e.target.reset();
        return;
    }

    const users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        currentUser = {
            name: user.name,
            email: user.email,
            points: user.points || 500,
            role: 'guest'
        };
        updateUserUI();
        closeAuthModal();
        showNotification('Login successful! Welcome ' + currentUser.name, 'success');
        e.target.reset();
    } else {
        showNotification('Incorrect username or password!', 'error');
    }
}
// sign up
function handleRegister(e) {
    e.preventDefault();
    const name = e.target[0].value.trim();
    const email = e.target[1].value.toLowerCase().trim();
    const password = e.target[2].value;
    const confirmPassword = e.target[3].value;
    if (password !== confirmPassword) {
        showNotification('Passwords do not match!', 'error');
        return;
    }
    let users = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    if (users.some(u => u.email === email)) {
        showNotification('Email is already registered!', 'error');
        return;
    }
    const newUser = {
        name: name,
        email: email,
        password: password,
        points: 500
    };
    users.push(newUser);
    localStorage.setItem('registeredUsers', JSON.stringify(users));
    showNotification('Registration successful! Please log in.', 'success');
    switchTab('login');
    e.target.reset();
}

// user UI update
function updateUserUI() {
    const loginBtn = document.getElementById('loginBtn');
    const userInfo = document.getElementById('userInfo');
    const userName = document.getElementById('userName');
    const userPoints = document.getElementById('userPoints');
    const pointsDisplay = document.getElementById('pointsDisplay');

    if (currentUser) {
        loginBtn.style.display = 'none';
        userInfo.classList.add('active');
        if (currentUser.role === 'admin') {
            userName.innerHTML = '<img src="../images/admin.png" alt="Admin" style ="width: 40px; height: 40px; object-fit: cover; border-radius: 50%;"> ' + currentUser.name;
        } else {
            userName.innerHTML = '<img src="../images/user.png" alt="Admin" style ="width: 40px; height: 40px; object-fit: cover; border-radius: 50%;"> ' + currentUser.name;
        }

        userPoints.textContent = currentUser.points;
        pointsDisplay.style.display = 'block';

    } else {
        loginBtn.style.display = 'block';
        userInfo.classList.remove('active');
        pointsDisplay.style.display = 'none';
    }

    localStorage.setItem('cart', JSON.stringify(cart));
}
// Close modals when clicking outside
window.onclick = function (event) {
    const authModal = document.getElementById('authModal');
    const cartModal = document.getElementById('cartModal');
    const categoryModal = document.getElementById('categoryModal');
    const productDetailModal = document.getElementById('productDetailModal');

    if (event.target === authModal) {
        closeAuthModal();
    }
    if (event.target === cartModal) {
        toggleCart();
    }
    if (event.target === categoryModal) {
        closeCategoryModal();
    }
    if (event.target === productDetailModal) {
        closeProductDetail();
    }
}
// Go to profile
function goToProfile() {
    if (!currentUser) {
        showNotification('Please log in!', 'error');
        return;
    }
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    window.location.href = '../Profile/profile_page.html';
}
// Logout
function logout() {
    currentUser = null;
    updateUserUI();
    showNotification('Logged out successfully!', 'success');
}
// Checkout
function checkout() {
    if (!currentUser) {
        showNotification('Please log in to checkout!', 'error');
        toggleCart();
        showAuthModal();
        return;
    }

    if (cart.length === 0) {
        showNotification('Cart is empty!', 'error');
        return;
    }


    const checkoutData = {
        cart: cart,
        selectedVoucher: selectedVoucher,
        user: currentUser
    };
    localStorage.setItem('checkoutData', JSON.stringify(checkoutData));
    window.location.href = '../Payment/payment_page.html';
}

//search function
function searchProducts() {
    const keyword = document.getElementById('searchInput').value.trim().toLowerCase();

    if (!keyword) {
        showNotification('Please enter a search keyword!', 'error');
        return;
    }

    buildCategorizedProducts();

    const allProducts = [
        ...categorizedProducts.ao,
        ...categorizedProducts.quan,
        ...categorizedProducts.aokhoac
    ];

    const results = allProducts.filter(p => {
        const name = (p.name || '').toLowerCase();
        const desc = (p.description || p.desc || '').toLowerCase();
        return name.includes(keyword) || desc.includes(keyword);
    });

    if (results.length === 0) {
        showNotification('No products found!', 'error');
        return;
    }


    renderAllProductsTabs();

    document.getElementById('ao-products').innerHTML = '';
    document.getElementById('quan-products').innerHTML = '';
    document.getElementById('aokhoac-products').innerHTML = '';

    let firstCategory = null;

    results.forEach(product => {
        const category = product.category || 'ao';
        const container = document.getElementById(`${category}-products`);
        if (!container) return;

        if (!firstCategory) firstCategory = category;

        const imageSrc = product.img || (product.images?.[0]) || "/images/nam.png";

        container.innerHTML += `
            <div class="menu-item" style="animation: fadeIn 0.5s; border:2px solid #667eea; border-radius:8px; margin:10px 0;">
                <div class="menu-item-image">
                    <img src="${imageSrc}" 
                         style="width:100%; height:100%; object-fit:cover; border-radius:8px;"
                         onerror="this.src='/images/nam.png'">
                </div>
                <div class="menu-item-info">
                    <h5>${product.name}</h5>
                    <p>${product.description || product.desc || ''}</p>
                    <div class="menu-item-price">${product.price.toLocaleString('vi-VN')} VND</div>
                </div>
            </div>
        `;
    });

    scrollToSection('all-products');

    if (firstCategory) {
        new bootstrap.Tab(document.querySelector(`#${firstCategory}-tab`)).show();
    }

    showNotification(`Found ${results.length} products`, 'success');
}
// submit contactform
function submitContactForm(e) {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            showNotification('Thank you for contacting us! We will respond soon.', 'success');
            contactForm.reset();
        });
    }
}


// DOM loaded
document.addEventListener('DOMContentLoaded', function () {
    loadCart();
    renderSaleProducts();
    renderBestSelling();
    renderAllProductsTabs();
    updateUserUI();

});
