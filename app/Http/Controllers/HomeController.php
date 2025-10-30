<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Services\DashboardService;

class HomeController extends Controller
{
    protected $dashboardService;

    public function __construct(DashboardService $dashboardService)
    {
        $this->dashboardService = $dashboardService;
    }

    public function index(Request $request)
    {
        // Varsayılan statik içerik (dashboard yoksa veya hata olursa)
        $staticContent = [
            'hero_title' => 'Ihr zuverlässiger Partner im Gastgewerbe und Gebäudemanagement.',
            'contact_button' => 'Angebot anfordern',
            'nav_services' => 'Dienstleistungen',
            'nav_about' => 'Über uns',
            'nav_career' => 'Karriere',
            'nav_contact' => 'Kontakt',
            'footer_title' => 'Ihr Experte für Reinigung und Wartung Ihres Unternehmens.',
        ];

        // Dashboard'dan gelen verileri çekmeye çalış
        try {
            $content = $this->dashboardService->getContent('home') ?? $staticContent;
            $services = $this->dashboardService->getServices() ?? [];
            $locations = $this->dashboardService->getLocations() ?? [];
            $settings = $this->dashboardService->getSettings() ?? [];
        } catch (\Exception $e) {
            // Hata durumunda statik fallback kullan
            report($e);
            $content = $staticContent;
            $services = [];
            $locations = [];
            $settings = [];
        }

        return Inertia::render('Home', [
            'content' => $content,
            'services' => $services,
            'locations' => $locations,
            'settings' => $settings,
            'currentRoute' => 'home',
        ]);
    }
}
