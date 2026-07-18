/* ============================================================
   BASE APP — Eshop Landing Page
   ============================================================ */

/* ============================================================
   MEMBER 13 — Cart Button Click Logic
   ============================================================ */
let cartCount = 0;
document.getElementById("cart-btn").addEventListener ("click", function () {
   cartCount++;
   this.textContent = "Cart (" + cartCount + ")";
});
