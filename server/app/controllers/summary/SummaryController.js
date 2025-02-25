import {ExpenseSummaryService} from "../../services/summary/ExpenseSummaryService.js";
import {PurchaseSummaryService} from "../../services/summary/PurchaseSummaryService.js";
import {ReturnSummaryService} from "../../services/summary/ReturnSummaryService.js";
import {SalesSummaryService} from "../../services/summary/SalesSummaryService.js";

// Expense Summary
export const ExpenseSummary = async (req, res) => {
    const result = await ExpenseSummaryService(req);
    res.json(result);
}

// Return Summary
export const ReturnSummary = async (req, res) => {
    const result = await ReturnSummaryService(req);
    res.json(result);
}

// Purchase Summary
export const PurchaseSummary = async (req, res) => {
    const result = await PurchaseSummaryService(req);
    res.json(result);
}

// Sale Summary
export const SaleSummary = async (req, res) => {
    const result = await SalesSummaryService(req);
    res.json(result);
}