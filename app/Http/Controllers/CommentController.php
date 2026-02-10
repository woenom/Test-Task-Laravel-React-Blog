<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function store(Request $request, Article $article)
    {
        $validated = $request->validate([
            'author_name' => 'required|string|max:80',
            'content' => 'required|string|max:1500',
        ]);

        $comment = $article->comments()->create($validated);

        return response()->json($comment, 201);
    }
}
