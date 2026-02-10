<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $fillable = ['author_name', 'content'];
    public function article()
    {
        return $this->belongsTo(Article::class);
    }
}
