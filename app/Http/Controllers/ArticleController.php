<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use App\Http\Resources\ArticleResource;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function index()
    {
        return ArticleResource::collection(
            Article::query()->orderBy('id','desc')->paginate(5)
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string|max:15000',
        ]);

        return Article::create($validated);
    }

    /**
     * Display the specified resource.
     */
    public function show(Article $article)
    {
        $article->load(['comments' => function ($query) {
            $query->orderBy('created_at', 'desc');
        }]);
        return new ArticleResource($article);
    }
}
