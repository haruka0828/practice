<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Sale;

class SalesController extends Controller
{
    public function purchase(Request $request)
    {
        // リクエストから下記情報を取得
        $product_id = $request->input('product_id');//商品ID
        $quantity = $request->input('quantity');//購入数量

        // Saleモデルを使用して購入処理
        $sale = new Sale();
        $result = $sale->makeSale($product_id, $quantity);

        if ($result['status'] == 'success') {
            return response()->json(['message' => '購入完了'], 200);
        } else {
            return response()->json(['message' => $result['message']], 400);
        }
    }
}