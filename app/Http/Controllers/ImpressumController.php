<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class ImpressumController extends Controller
{
    public function index()
    {
        // Inertia kullanmıyorsanız view() döndürebilirsiniz.
        return Inertia::render('Impressum');
        // return view('impressum'); // Blade kullanıyorsanız
    }
}
