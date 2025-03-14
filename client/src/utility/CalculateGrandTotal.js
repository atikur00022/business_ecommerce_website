export const calculateGrandTotal = (purchaseFormValue, purchaseItemList) => {
    const { vatTax, discount, otherCost, shippingCost } = purchaseFormValue;

    let totalItems = purchaseItemList.reduce((total, item) => total + item.total, 0);
    let totalCost = totalItems + parseFloat(otherCost) + parseFloat(shippingCost);
    let totalWithVat = totalCost + (totalCost * (parseFloat(vatTax) || 0)) / 100;
    let totalWithDiscount = totalWithVat - parseFloat(discount);

    return totalWithDiscount;
};
