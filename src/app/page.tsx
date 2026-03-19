"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { Award, HelpCircle, Heart, Rocket, Sparkles, Target, TrendingUp, Zap } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="directional-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="mediumLarge"
      sizing="large"
      background="grid"
      cardStyle="subtle-shadow"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="layered"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="F1 Predict Pro"
          navItems={[
            { name: "Predictions", id: "predictions" },
            { name: "Features", id: "features" },
            { name: "Insights", id: "insights" },
            { name: "Pricing", id: "pricing" },
            { name: "FAQ", id: "faq" }
          ]}
          button={{ text: "Unlock Predictions", href: "#contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="F1 Predict Pro"
          description="AI-powered winner predictions, live telemetry, and interactive race intelligence. Stay ahead of every Grand Prix with premium F1 insights."
          slides={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BB9oYu6wjJLXa75GpLKrYHcGcx/a-stunning-formula-1-race-track-aerial-v-1773951927001-2bb5f713.png",              imageAlt: "Formula 1 race track aerial view with golden sunlight"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BB9oYu6wjJLXa75GpLKrYHcGcx/a-cutting-edge-f1-race-prediction-dashbo-1773951925525-bee41fb2.png",              imageAlt: "F1 race prediction dashboard interface with real-time telemetry"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BB9oYu6wjJLXa75GpLKrYHcGcx/an-immersive-formula-1-race-control-cent-1773951925130-a2f83834.png",              imageAlt: "F1 race control center with live data streams"
            }
          ]}
          buttons={[
            { text: "Unlock Predictions", href: "#contact" },
            { text: "Learn More", href: "#features" }
          ]}
          autoplayDelay={4000}
          showDimOverlay={false}
        />
      </div>

      <div id="about" data-section="about">
        <InlineImageSplitTextAbout
          heading={[
            { type: "text", content: "Predict the Podium Like a Pro" }
          ]}
          buttons={[
            { text: "Explore Platform", href: "#features" }
          ]}
          useInvertedBackground={true}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardNine
          title="Race Intelligence Platform"
          description="Our premium platform combines real-time race data, AI-powered analytics, and interactive visualizations to give you the competitive edge."
          tag="Premium Features"
          tagIcon={Sparkles}
          showStepNumbers={true}
          features={[
            {
              id: 1,
              title: "Live Race Leaderboards",              description: "Real-time driver positions, lap times, and gap analysis updated every second during races.",              phoneOne: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BB9oYu6wjJLXa75GpLKrYHcGcx/a-mobile-phone-displaying-a-real-time-f1-1773951926057-f52dbe0b.png?_wi=1",                imageAlt: "Mobile showing live race leaderboard"
              },
              phoneTwo: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BB9oYu6wjJLXa75GpLKrYHcGcx/a-mobile-phone-showing-an-ai-powered-rac-1773951925776-df6ecb93.png?_wi=1",                imageAlt: "Mobile showing AI prediction interface"
              }
            },
            {
              id: 2,
              title: "AI Prediction Engine",              description: "Machine learning models analyze historical data, driver form, and track conditions for podium predictions.",              phoneOne: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BB9oYu6wjJLXa75GpLKrYHcGcx/a-mobile-phone-showing-an-ai-powered-rac-1773951925776-df6ecb93.png?_wi=2",                imageAlt: "AI prediction confidence scores display"
              },
              phoneTwo: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BB9oYu6wjJLXa75GpLKrYHcGcx/a-mobile-phone-displaying-a-real-time-f1-1773951926057-f52dbe0b.png?_wi=2",                imageAlt: "Race telemetry data visualization"
              }
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="Proven Track Record"
          description="Our AI-driven predictions have consistently outperformed industry benchmarks across multiple seasons."
          tag="Performance Metrics"
          tagIcon={Zap}
          metrics={[
            { id: "1", icon: Target, title: "Prediction Accuracy", value: "87%" },
            { id: "2", icon: TrendingUp, title: "Win Rate", value: "76%" },
            { id: "3", icon: Award, title: "Users Worldwide", value: "50K+" },
            { id: "4", icon: Zap, title: "Races Analyzed", value: "300+" }
          ]}
          animationType="scale-rotate"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardFour
          title="Premium Prediction Packages"
          description="Choose the subscription level that fits your F1 passion and competitive needs."
          tag="Available Now"
          tagIcon={Sparkles}
          products={[
            {
              id: "basic",              name: "Casual Insights",              price: "$9.99/mo",              variant: "Essential Analytics",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BB9oYu6wjJLXa75GpLKrYHcGcx/a-sleek-product-card-showcasing-the-prem-1773951925511-7c1b0526.png",              imageAlt: "Premium Prediction Engine package"
            },
            {
              id: "pro",              name: "Pro Intelligence",              price: "$29.99/mo",              variant: "Advanced Predictions",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BB9oYu6wjJLXa75GpLKrYHcGcx/a-premium-product-card-highlighting-the--1773951926083-cf87e23f.png",              imageAlt: "Live Telemetry Dashboard package"
            },
            {
              id: "elite",              name: "Elite Advantage",              price: "$59.99/mo",              variant: "Full Platform Access",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BB9oYu6wjJLXa75GpLKrYHcGcx/a-product-showcase-card-for-the-fantasy--1773951926292-5630df92.png",              imageAlt: "Fantasy League Advantage package"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Trusted by F1 Fans Worldwide"
          description="See how premium predictions are transforming the race experience for serious enthusiasts."
          tag="Community Voices"
          tagIcon={Heart}
          testimonials={[
            {
              id: "1",              name: "Marcus Chen",              role: "Fantasy League Champion",              testimonial: "F1 Predict Pro elevated my fantasy league strategy. The AI predictions are eerily accurate and helped me win three consecutive championships.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BB9oYu6wjJLXa75GpLKrYHcGcx/a-professional-headshot-of-a-male-f1-ent-1773951925155-8859233e.png",              imageAlt: "Marcus Chen professional headshot"
            },
            {
              id: "2",              name: "Sarah Williams",              role: "Casual F1 Enthusiast",              testimonial: "I'm not a data scientist, but this platform makes complex race analytics accessible and fun. I've never enjoyed following races more.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BB9oYu6wjJLXa75GpLKrYHcGcx/a-professional-headshot-of-a-female-fant-1773951925800-111ed6b5.png",              imageAlt: "Sarah Williams professional headshot"
            },
            {
              id: "3",              name: "James Robertson",              role: "Professional Bettor",              testimonial: "The live telemetry data and prediction confidence scores have become integral to my betting strategy. Outstanding accuracy and reliability.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BB9oYu6wjJLXa75GpLKrYHcGcx/a-professional-headshot-of-a-male-bettin-1773951924657-823d4725.png",              imageAlt: "James Robertson professional headshot"
            },
            {
              id: "4",              name: "Elena Rossi",              role: "Hardcore F1 Fan",              testimonial: "Finally, a platform that understands what serious F1 fans need. The real-time race intelligence keeps me competitive in my league.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BB9oYu6wjJLXa75GpLKrYHcGcx/a-professional-headshot-of-a-female-casu-1773951924873-44ba8c97.png",              imageAlt: "Elena Rossi professional headshot"
            },
            {
              id: "5",              name: "David Anderson",              role: "25+ Year F1 Follower",              testimonial: "I've followed F1 for decades, and this AI-powered platform brings a level of insight I never thought possible. Revolutionary.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BB9oYu6wjJLXa75GpLKrYHcGcx/a-professional-headshot-of-a-male-hardco-1773951925479-fe6ded62.png",              imageAlt: "David Anderson professional headshot"
            },
            {
              id: "6",              name: "Jessica Liu",              role: "Fantasy Sports Competitor",              testimonial: "The accuracy and speed of predictions gave me a real competitive advantage. Highly recommend to anyone serious about fantasy F1.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BB9oYu6wjJLXa75GpLKrYHcGcx/a-professional-headshot-of-a-female-comp-1773951924461-6a621704.png",              imageAlt: "Jessica Liu professional headshot"
            }
          ]}
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          names={["Formula 1", "ESPN", "The Athletic", "Sky Sports F1", "Motorsport.com", "FIA", "Fantasy Premier League", "DraftKings"]}
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BB9oYu6wjJLXa75GpLKrYHcGcx/the-official-formula-1-brand-logo-render-1773951925217-5f7dab99.png",            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BB9oYu6wjJLXa75GpLKrYHcGcx/espn-motorsports-logo-rendered-in-profes-1773951924092-d496901a.png",            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BB9oYu6wjJLXa75GpLKrYHcGcx/the-athletic-logo-in-modern-minimalist-r-1773951925499-4c096a96.png",            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BB9oYu6wjJLXa75GpLKrYHcGcx/sky-sports-f1-branding-logo-rendered-in--1773951925047-e3b3859b.png",            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BB9oYu6wjJLXa75GpLKrYHcGcx/motorsport-com-logo-in-modern-minimalist-1773951923845-5a0476d8.png",            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BB9oYu6wjJLXa75GpLKrYHcGcx/official-fia-branding-logo-rendered-in-p-1773951924289-2fa21bbf.png",            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BB9oYu6wjJLXa75GpLKrYHcGcx/fantasy-premier-league-branding-logo-in--1773951925699-84413097.png",            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BB9oYu6wjJLXa75GpLKrYHcGcx/draftkings-sports-platform-logo-rendered-1773951924263-0e2c6de4.png"
          ]}
          title="Trusted by Industry Leaders"
          description="Our platform is recognized and recommended by the world's leading motorsport and sports analytics authorities."
          tag="Industry Recognition"
          textboxLayout="default"
          useInvertedBackground={false}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Get answers to common questions about our premium F1 prediction platform."
          tag="Support Center"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",              title: "How accurate are the AI predictions?",              content: "Our machine learning models achieve 87% prediction accuracy for podium finishes, trained on over 300 races of historical data. Accuracy varies by race complexity, weather conditions, and team dynamics. We provide confidence scores for each prediction so you know the reliability level."
            },
            {
              id: "2",              title: "What data sources feed the prediction engine?",              content: "We integrate real-time telemetry data, historical race results, driver performance metrics, track-specific conditions, weather patterns, pit strategy data, tire degradation modeling, and team performance indicators. Our algorithms continuously learn and adapt to new racing patterns."
            },
            {
              id: "3",              title: "Can I use predictions for fantasy leagues?",              content: "Absolutely! Our predictions are specifically designed to give fantasy league players a competitive edge. We provide driver rankings, injury updates, and performance projections tailored to major fantasy F1 platforms."
            },
            {
              id: "4",              title: "Is this legal for betting purposes?",              content: "Our platform provides analytical insights and predictions. We recommend checking your local regulations regarding sports betting. Our data is for informational purposes to enhance your F1 viewing and fantasy league experience."
            },
            {
              id: "5",              title: "How often are predictions updated?",              content: "Predictions update in real-time during race weekends every 30 seconds. Between races, we update weekly as new driver data, team changes, and track intelligence become available."
            },
            {
              id: "6",              title: "What subscription level should I choose?",              content: "Casual Insights suits social F1 fans; Pro Intelligence is ideal for fantasy league players; Elite Advantage includes everything plus API access and personal strategy consultations for serious competitors."
            }
          ]}
          faqsAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Ready to Predict?"
          tagIcon={Rocket}
          title="Start Your Premium F1 Journey Today"
          description="Join thousands of F1 fans and competitive players using AI-powered predictions to stay ahead of every Grand Prix. Access exclusive race intelligence, live telemetry, and prediction confidence scores."
          buttons={[
            { text: "Unlock Predictions Now", href: "https://example.com/signup" },
            { text: "Schedule Demo", href: "https://example.com/demo" }
          ]}
          background={{ variant: "gradient-bars" }}
          useInvertedBackground={true}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Product",              items: [
                { label: "Features", href: "#features" },
                { label: "Pricing", href: "#products" },
                { label: "Predictions", href: "#" },
                { label: "API Access", href: "#" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "#about" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Press", href: "#" }
              ]
            },
            {
              title: "Support",              items: [
                { label: "Help Center", href: "#faq" },
                { label: "Contact", href: "#contact" },
                { label: "Documentation", href: "#" },
                { label: "Status", href: "#" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookie Policy", href: "#" },
                { label: "Disclaimer", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2024 F1 Predict Pro. All rights reserved. Formula 1 is a registered trademark of Formula One World Championship Limited."
        />
      </div>
    </ThemeProvider>
  );
}