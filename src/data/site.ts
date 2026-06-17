import type { LucideIcon } from "lucide-react";
import {
  AudioLines,
  BadgeCheck,
  Building2,
  Camera,
  Clapperboard,
  Handshake,
  HeartHandshake,
  Lightbulb,
  MonitorPlay,
  Radio,
  Rocket,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Video
} from "lucide-react";

export interface Service {
  title: string;
  slug: string;
  image: string;
  imageAlt: string;
  icon: LucideIcon;
  summary: string;
  description: string;
  benefits: string[];
  useCases: string[];
}

export interface PortfolioProject {
  title: string;
  category: string;
  image: string;
  imageAlt: string;
  summary: string;
  metrics: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const trustedBy = [
  "SummitWorks",
  "Civic Arts Council",
  "Northstar Health",
  "BluePeak Labs",
  "Unity Foundation"
];

export const services: Service[] = [
  {
    title: "Event Production",
    slug: "event-production",
    image: "/images/corporate-event.jpg",
    imageAlt: "Large professional event audience gathered under warm blue stage lighting",
    icon: Clapperboard,
    summary: "Complete planning, show flow, production management, and on-site execution.",
    description:
      "We coordinate the moving pieces behind high-stakes events, from run-of-show planning and vendor alignment to stage management and technical direction.",
    benefits: ["Single accountable production partner", "Detailed schedules and cue sheets", "Polished guest and speaker experience"],
    useCases: ["Corporate events", "Conferences", "Trade shows", "Product launches"]
  },
  {
    title: "LED Walls",
    slug: "led-walls",
    image: "/images/led-wall.jpg",
    imageAlt: "Live event stage with LED wall visuals, colorful lighting, performers, and audience",
    icon: MonitorPlay,
    summary: "Bright, scalable LED displays for stages, brand moments, and immersive visuals.",
    description:
      "Our LED wall solutions create crisp visual impact for keynote stages, concerts, sponsor activations, and hybrid event environments.",
    benefits: ["High-impact scenic design", "Flexible sizing and configuration", "Clear visibility in large venues"],
    useCases: ["Main stages", "Concert backdrops", "Exhibit booths", "Awards shows"]
  },
  {
    title: "Audio Solutions",
    slug: "audio-solutions",
    image: "/images/audio-production.jpg",
    imageAlt: "Close-up of a professional audio mixing console with colorful control dials",
    icon: AudioLines,
    summary: "Professional sound systems, microphones, mixing, and technical audio support.",
    description:
      "From executive panels to live performances, we design audio systems that keep every word, track, and transition clear.",
    benefits: ["Venue-specific system design", "Reliable wireless microphone management", "Dedicated engineers on site"],
    useCases: ["Panels", "Keynotes", "Live music", "Community events"]
  },
  {
    title: "Lighting Design",
    slug: "lighting-design",
    image: "/images/lighting-design.jpg",
    imageAlt: "Concert stage lighting rig with blue beams and warm fixtures above an audience",
    icon: Lightbulb,
    summary: "Dynamic lighting that shapes mood, focus, energy, and stage presence.",
    description:
      "We use lighting to guide attention, support brand identity, and transform ordinary rooms into memorable environments.",
    benefits: ["Stage and room enhancement", "Brand-color programming", "Smooth cue-based transitions"],
    useCases: ["Galas", "Concerts", "Cultural programs", "Launch events"]
  },
  {
    title: "Live Streaming",
    slug: "live-streaming",
    image: "/images/live-streaming.jpg",
    imageAlt: "Professional video camera on a tripod recording a banquet hall event with a stage feed visible",
    icon: Radio,
    summary: "Hybrid and virtual production workflows with broadcast-ready delivery.",
    description:
      "We help organizations extend their reach with multi-camera capture, streaming control, recording, and audience-ready online delivery.",
    benefits: ["Expanded audience access", "Broadcast-style switching", "High-quality archive recordings"],
    useCases: ["Hybrid conferences", "Webinars", "Nonprofit fundraisers", "Town halls"]
  },
  {
    title: "Photography & Videography",
    slug: "photography-videography",
    image: "/images/photography-video.jpg",
    imageAlt: "Photography and video crew setting up lighting and camera equipment for a production",
    icon: Camera,
    summary: "Event coverage, highlight reels, interviews, and branded visual storytelling.",
    description:
      "Our creative team captures the energy, people, and details that make an event valuable long after the doors close.",
    benefits: ["Professional event documentation", "Social-ready content", "Edited recaps and highlight videos"],
    useCases: ["Corporate recaps", "Concert highlights", "Sponsor content", "Community storytelling"]
  }
];

export const whyChoose = [
  { title: "End-to-End Event Support", icon: Handshake, copy: "Planning, production, technology, and execution under one coordinated process." },
  { title: "Experienced Technical Team", icon: UsersRound, copy: "Calm specialists who understand show timing, venue realities, and audience expectations." },
  { title: "Cutting-Edge Technology", icon: Sparkles, copy: "Modern audio, visual, streaming, lighting, and display systems built for impact." },
  { title: "Reliable Execution", icon: ShieldCheck, copy: "Detailed preparation and disciplined on-site delivery for moments that cannot miss." },
  { title: "Scalable Solutions", icon: Rocket, copy: "Flexible crews and production packages for intimate programs or large-format experiences." }
];

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "Corporate Conference",
    category: "Corporate",
    image: "/images/portfolio-corporate.jpg",
    imageAlt: "Diverse audience seated at a professional conference with blue stage lighting",
    summary: "A polished conference environment with audience support, stage production, and presentation-ready technology.",
    metrics: ["Conference audience", "Stage lighting", "Presentation support"]
  },
  {
    title: "Cultural Celebration",
    category: "Cultural",
    image: "/images/portfolio-cultural.jpg",
    imageAlt: "Traditional Kerala cultural dancers performing during a community festival",
    summary: "A community-focused cultural celebration with performance flow, audience experience, and event-day coordination.",
    metrics: ["Cultural program", "Community gathering", "Performance support"]
  },
  {
    title: "Live Concert & Stage Performance",
    category: "Entertainment",
    image: "/images/portfolio-concert.jpg",
    imageAlt: "Outdoor stage with audience and blue concert lighting before a live performance",
    summary: "A live stage performance environment with lighting design, audio support, and production-ready show flow.",
    metrics: ["Live stage", "Lighting rig", "Audience energy"]
  },
  {
    title: "Community Awards Event",
    category: "Community",
    image: "/images/team-production.jpg",
    imageAlt: "Award trophies arranged for a community sports and recognition event",
    summary: "A warm recognition event format with staging, media moments, awards flow, and guest-focused production.",
    metrics: ["Awards program", "Guest moments", "Community recognition"]
  },
  {
    title: "Community Sports Tournament",
    category: "Sports",
    image: "/images/portfolio-sports.jpg",
    imageAlt: "Cricket players competing in an outdoor community sports tournament",
    summary: "A sports tournament experience with live-event logistics, ceremony support, media capture, and community energy.",
    metrics: ["Tournament day", "Outdoor event", "Awards support"]
  }
];

export const industries = [
  { title: "Corporate", icon: Building2 },
  { title: "Cultural", icon: Sparkles },
  { title: "Entertainment", icon: Video },
  { title: "Nonprofit", icon: HeartHandshake },
  { title: "Community", icon: UsersRound }
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Epic Eventz brought structure, calm, and a premium finish to an event with a lot of moving parts.",
    name: "Maya Thompson",
    role: "Director of Events, SummitWorks"
  },
  {
    quote:
      "The production quality felt polished from the first guest arrival through the final cue.",
    name: "Andre Lewis",
    role: "Program Chair, Civic Arts Council"
  },
  {
    quote:
      "Their technical team made our hybrid audience feel like part of the room.",
    name: "Priya Shah",
    role: "Operations Lead, BluePeak Labs"
  }
];

export const values = [
  { title: "Technology Driven", icon: BadgeCheck, copy: "We use modern event systems to make experiences more immersive, reliable, and measurable." },
  { title: "Customer Focused", icon: HeartHandshake, copy: "Every recommendation starts with the audience, the venue, the timeline, and the business goal." },
  { title: "Reliable Execution", icon: ShieldCheck, copy: "We prepare deeply, communicate clearly, and deliver with precision when the room is live." }
];
