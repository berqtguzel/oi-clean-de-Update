<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(Request $request)
    {
        $staticContent = [
            'hero_title' => 'Ihr zuverlässiger Partner im Gastgewerbe und Gebäudemanagement.',
            'contact_button' => 'Angebot anfordern',
            'nav_services' => 'Dienstleistungen',
            'nav_about' => 'Über uns',
            'nav_career' => 'Karriere',
            'nav_contact' => 'Kontakt',
            'footer_title' => 'Ihr Experte für Reinigung und Wartung Ihres Unternehmens.',
        ];

        return Inertia::render('Home', [
            'content' => $staticContent,
            'currentRoute' => 'home',
        ]);
    }
}
