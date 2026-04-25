// Identity Alchemy - Universal Master Engine v18.8 (Harmonic Synthesis)

const GlobalLibrary = {
    spiritual: {
        name: "Spiritual Identity",
        intro: "In this sanctuary, we dissolve the static of your history. Your Spiritual Identity is the foundation—the primal connection that determines the shape of every outcome. We are here to listen for the subtle signals of your expansion.",
        questions: ["What spiritual frictions or old stories are you ready to leave behind?", "When you feel in a state of absolute flow, what does that experience look like?", "What core principles are you ready to embody in your daily life?"],
        states_of_being: ["Quiet Clarity", "Direct Intuition", "Universal Connection", "Peaceful Expansion", "Daily Presence", "Infinite Curiosity", "Radical Peace", "Unshakeable Faith", "Compassionate Presence", "Luminous Certainty", "Sacred Autonomy", "Effortless Surrender", "Universal Harmony", "Alchemical Balance", "The Light of Truth"],
        states_of_power: ["Savant Insight", "Effortless Wisdom", "Spiritual Autonomy", "The Flow of Oneness", "Resonant Stillness", "Infinite Patience", "Joyful Expansion", "The Soul’s Sanctuary", "Transcendent Focus", "The Witness State", "Archetypal Presence", "Vibrant Oneness", "Metaphysical Ease", "Timeless Being", "Absolute Spirit"]
    },
    mental: {
        name: "Mental Identity",
        intro: "A focused mind is a high-output engine. By being brutally honest about the mental 'noise' that weighs you down, we create the contrast necessary to define your high-frequency focus.",
        questions: ["What mental distractions or historical patterns are currently clogging your focus?", "When you have absolute clarity, what does your work feel like?", "How does knowing what distracts you define the perfect sanctuary for your focus?"],
        states_of_being: ["Laser Focus", "Quiet Mastery", "Simplified Mindset", "Mental Sanctuary", "High-Resolution Thought", "Deep Intellectual Ease", "Unbound Creativity", "Cognitive Serenity", "Precise Awareness", "Mental Flow State"],
        states_of_power: ["Absolute Certainty", "Strategic Mastery", "Cognitive Flow", "Genius Unbound", "Sharp Intuition", "The Architect’s Mind", "Analytic Speed", "Creative Synthesis", "Mastery of Concept", "Unshakeable Concentration", "High-Frequency Logic", "Savant Memory", "Effortless Learning", "The Observer Mind", "Universal Intelligence"]
    },
    vocational: {
        name: "Vocational Identity",
        intro: "Your professional impact is a result of your authentic presence. By focusing on the roles and tasks that drain you, we can clear the way for your true zone of genius.",
        questions: ["What professional tasks or roles have become a drain on your brilliance?", "Where do you feel like you are 'performing' rather than just being yourself?", "What does professional ease and authentic leadership feel like?"],
        states_of_being: ["Natural Presence", "Authentic Authority", "Weightless Impact", "Effortless Leadership", "Unmasked Influence", "Professional Peace", "Creative Fulfillment", "Vocational Alignment", "Steady Purpose", "The Impact Mindset"],
        states_of_power: ["Role Alignment", "Savant-Level Output", "Magnetism of Purpose", "Autonomous Contribution", "Professional Flow", "Strategic Command", "Radical Value Creation", "The Visionary Leader", "Effortless Result-Drive", "Executive Presence", "Global Contribution", "Universal Vocation", "Legacy Impact", "Masterful Execution", "Collaborative Flow"]
    },
    wealth: {
        name: "Wealth Identity",
        intro: "True wealth is the ability to choose how you spend your time. By recognizing financial friction, we reveal the hidden desire for absolute freedom and autonomy.",
        questions: ["What is the most frustrating aspect of your financial life right now?", "What does infinite financial freedom feel like to you?", "How does identifying what you don't want reveal your true desire for autonomy?"],
        states_of_being: ["Wealth Sanctuary", "Financial Peace", "Prosperous Mindset", "Abundant Living", "Time-Rich Autonomy", "Relaxed Prosperity", "Natural Abundance", "Wealth Resonance", "The Flow of Assets", "Grateful Stewardship"],
        states_of_power: ["Automated Wealth", "Effortless Income", "Passive Abundance", "Strategic Financial Mastery", "Autonomous Flow", "Wealth from My Genius", "Reliable Prosperity", "Geometric Growth", "Prosperous Security", "Financial Sovereignity", "Economic Freedom", "Universal Abundance", "Asset Magnetism", "Infinite Resourcefulness", "The Money Magnet"]
    },
    physical: {
        name: "Physical Identity",
        intro: "Your body is the vessel for your best work. By recognizing old stories of injury and fatigue, you define the path to vitality and prime strength.",
        questions: ["What physical stories or old injuries are you ready to stop carrying?", "When you feel in your peak physical prime, what do you feel like doing?", "How does identifying where your body feels 'stuck' reveal the path to health?"],
        states_of_being: ["Prime Vitality", "Biological Focus", "Effortless Regeneration", "Vibrant Resilience", "Kinetic Ease", "Structural Peace", "Body Consciousness", "Biological Harmony", "Peak Wellness", "Youthful Energy"],
        states_of_power: ["Peak Energy", "Renewed Mobility", "Athletic Clarity", "Biological Masterpiece", "Mastery of Form", "Health in Flow", "Unbound Strength", "Neuromuscular Precision", "Genetic Optimization", "Physical Autonomy", "Primal Vitality", "The Vital Self", "Endless Stamina", "Radiant Health", "Physiological Mastery"]
    },
    familial: {
        name: "Familial Identity",
        intro: "Your home should be your sanctuary. By recognizing household stress and old patterns, we find the path to mutual peace and connection.",
        questions: ["What relational stress or old patterns are you ready to leave behind?", "What does absolute peace and autonomy look like in your home?", "How does identifying what you don't want in your home define the sanctuary you do want?"],
        states_of_being: ["Peaceful Home Sanctuary", "Domestic Autonomy", "Simplified Living", "Quiet Love", "Sanctuary of Peace", "Harmony by Design", "Relational Stillness", "Presence-led Parenting", "Nurturing Environment", "Home Comfort"],
        states_of_power: ["Honest Partnership", "Relaxed Leadership", "Authentic Love", "Resonant Connection", "Mutually Supportive Growth", "Deep Emotional Safety", "The Family Anchor", "Sacred Connection", "Legacy Connection", "The Peace-Maker", "Interpersonal Flow", "Universal Love", "Heart-Centered Presence", "Generative Connection", "The Supportive Root"]
    },
    social: {
        name: "Social Identity",
        intro: "Public impact is the result of your presence. By identifying social burnout and masking, we reveal the path to effortless, authentic influence.",
        questions: ["What social burnout or performative habits are you ready to drop?", "What does authentic influence and social ease feel like to you?", "How does identifying where you feel exhausted reveal your hidden zone of impact?"],
        states_of_being: ["Unmasked Presence", "Social Sanctuary", "Effortless Charisma", "Authentic Connection", "Peaceful Visibility", "Public Transparency", "Social Autonomy", "Quiet Influence", "The Reflective Peer", "Direct Presence"],
        states_of_power: ["Radical Honesty", "Authentic Network", "Beacon of Truth", "Magnetic Reputation", "Public Mastery", "Presence-led Influence", "Autonomous Social Flow", "Massive Social Impact", "Global Network Resonance", "The Social Architect", "Masterful Networking", "Universal Charisma", "High-Resolution Visibility", "Unshakeable Social Ease", "Magnetic Individualism"]
    }
};

const AspirationMap = {
    'noise': 'Quiet Clarity', 'struggle': 'Effortless Momentum', 'clutter': 'Simplified Focus',
    'masking': 'Radical Authenticity', 'performing': 'Natural Presence', 'tire': 'Renewed Vitality',
    'tired': 'Renewed Vitality', 'exhausted': 'Peak Energy', 'stuck': 'Constant Growth',
    'manual': 'Automated Ease', 'performance': 'Real Contibution', 'pressure': 'Relaxed Authority',
    'logistics': 'Strategic Mastery', 'fear': 'Absolute Confidence', 'anxiety': 'Peaceful Certainty',
    'confusion': 'Sharp Intuition', 'mixed': 'Clean Results', 'results': 'Measurable Impact',
    'ceiling': 'Infinite Expansion', 'limiting': 'Unbound Growth', 'historical': 'Fresh Perspective',
    'drain': 'Sustainable Flow', 'friction': 'Perfect Alignment', 'mask': 'Unmasked Honesty'
};

const AlchemicalDeclarations = {
    'spiritual': {
        'Direct Intuition': "I am eternally connected to the infinite source of truth, receiving direct wisdom in every moment.",
        'Universal Connection': "I move in perfect harmony with the cosmos, a singular thread in the divine tapestry of Oneness.",
        'Peaceful Expansion': "My reality expands effortlessly into the vast pond of my potential, free from the glass walls of my history.",
        'Radical Peace': "I am the unshakeable center of my own universe, radiating a peace that transcends all understanding.",
        'Infinite Curiosity': "I approach every experience with the wonder of a curious mind, finding God in the details of my daily life.",
        'Daily Presence': "I am the Master of Now. Each breath is a conscious act of creation.",
        'Luminous Certainty': "I walk in the light of absolute truth, my path illuminated by the certainty of my own expansion.",
        'Sacred Autonomy': "I claim my divine right to self-determination, leading from my most authentic presence.",
        'Effortless Surrender': "I release the friction of struggle, allowing the tide of infinity to carry me toward my highest good.",
        'Universal Harmony': "My spirit is a symphony of balance, resonating with the frequency of absolute spirit.",
        'The Light of Truth': "I embody the radiance of the source, casting aside all shadows of the old story.",
        'Alchemical Balance': "I have mastered the transmutation of friction into flow, finding the golden mean in every interaction.",
        'Savant Insight': "I possess the clarity of high-frequency focus, seeing the geometry of reality with effortless precision.",
        'Effortless Wisdom': "I speak from the depth of my being, my words carrying the weight of ancient and eternal truth.",
        'Spiritual Autonomy': "I am the architect of my soul, answerable only to the infinite presence within me.",
        'The Flow of Oneness': "I am the river and the ocean, moving in the seamless current of universal energy.",
        'Joyful Expansion': "My growth is an act of celebration, a weightless ascent into the light of my desired reality.",
        'Transcendent Focus': "I rise above the static of the world, anchoring my awareness in the frequency of my expansion.",
        'Vibrant Oneness': "My body and spirit are a single, luminous flame, burning with the intensity of absolute spirit.",
        'Metaphysical Ease': "I navigate the subtle realms of existence with grace, finding sanctuary in the unseen.",
        'Timeless Being': "I exist beyond the limitations of history, a perpetual inhabitant of the eternal now.",
        'Absolute Spirit': "I AM THE SOURCE. I am the primal root of my own reality."
    },
    'mental': {
        'Laser Focus': "I cut through the static of the world with the precision of a master architect.",
        'Quiet Mastery': "My mind is a high-output engine of calm and clarity.",
        'Simplified Mindset': "I dissolve complexity into its most powerful and elegant forms.",
        'Mental Sanctuary': "My internal world is a fortress of peace and unshakeable focus.",
        'High-Resolution Thought': "I see the geometry of every problem and the direct path to every solution.",
        'Deep Intellectual Ease': "I absorb and synthesize information with effortless speed.",
        'Unbound Creativity': "My ideas flow from the infinite source of original thought.",
        'Cognitive Serenity': "I am the observer of my thoughts, choosing only those that fuel my expansion.",
        'Precise Awareness': "I am hyper-aware of the signal, ignoring the noise of historical patterns.",
        'Mental Flow State': "I exist in a perpetual state of high-frequency cognitive resonance.",
        'Absolute Certainty': "I move with the unshakeable confidence of one who knows their own truth.",
        'Strategic Mastery': "I navigate the landscape of my goals with effortless precision.",
        'Cognitive Flow': "My thoughts move in a seamless current of productive energy.",
        'Genius Unbound': "I claim my inherent right to exceptional clarity and impact.",
        'Sharp Intuition': "I trust the sudden flashes of wisdom that guide my intellectual expansion.",
        'The Architect’s Mind': "I build my reality with the logic of universal intelligence.",
        'Analytic Speed': "I process complexity at the speed of direct intuition.",
        'Creative Synthesis': "I bridge disparate worlds to create new and radical value.",
        'Mastery of Concept': "I own the ideas I embody, speaking them into existence with authority.",
        'Unshakeable Concentration': "My focus is a singular, unwavering light in the darkness of distraction.",
        'High-Frequency Logic': "I reason from the foundation of absolute truth.",
        'Savant Memory': "I retain the golden threads of wisdom with effortless precision.",
        'Effortless Learning': "Growth is my natural state, an easy expansion into new realms of knowledge.",
        'The Observer Mind': "I am the master of my mental focus, leading from my most authentic presence.",
        'Universal Intelligence': "I am a singular expression of the infinite mind of God."
    },
    'vocational': {
        'Natural Presence': "I lead from the depth of my being, my impact a natural byproduct of my authenticity.",
        'Authentic Authority': "I claim my place at the table with the quiet confidence of a master.",
        'Weightless Impact': "My contribution flows effortlessly into the world, creating massive value without strain.",
        'Effortless Leadership': "I guide others through the power of my presence and the clarity of my vision.",
        'Unmasked Influence': "I discard the performance, speaking my truth with absolute transparency.",
        'Professional Peace': "My work is a sanctuary of focus and fulfillment.",
        'Creative Fulfillment': "I am the artist of my own career, painting my reality with the colors of my passion.",
        'Vocational Alignment': "My roles are the perfect mirror of my soul's highest purpose.",
        'Steady Purpose': "I move toward my legacy with the momentum of unshakeable intent.",
        'The Impact Mindset': "I am a catalyst for transformation in every interaction.",
        'Role Alignment': "I occupy only those spaces that resonate with my primal root.",
        'Savant-Level Output': "I produce work of exceptional quality with the ease of high-frequency focus.",
        'Magnetism of Purpose': "Opportunities gravitate to me as a result of my unshakeable presence.",
        'Autonomous Contribution': "I am the architect of my own impact, answerable only to the truth.",
        'Professional Flow': "I exist in a perpetual state of vocational resonance.",
        'Strategic Command': "I lead with the precision of one who sees the entire landscape.",
        'Radical Value Creation': "I solve problems that others cannot see, with the ease of direct intuition.",
        'The Visionary Leader': "I pull the future into the now through the power of my declaration.",
        'Effortless Result-Drive': "Outcomes are the artifacts of my being, not the goal of my doing.",
        'Executive Presence': "I command the room by simply existing in the fullness of my power.",
        'Global Contribution': "My work ripples out to touch the infinite tapestry of humanity.",
        'Universal Vocation': "I am the instrument of a higher purpose, played with masterful precision.",
        'Legacy Impact': "I build structures that endure, fueled by the frequency of absolute spirit.",
        'Masterful Execution': "I bring my vision into form with the grace of a creator.",
        'Collaborative Flow': "I move with others in the seamless harmony of shared purpose."
    },
    'wealth': {
        'Wealth Sanctuary': "My financial life is a fortress of peace, security, and absolute autonomy.",
        'Financial Peace': "I release all friction around money, allowing abundance to flow in its natural current.",
        'Prosperous Mindset': "I am a magnet for wealth, seeing the opportunity for expansion in every moment.",
        'Abundant Living': "My reality is an infinite field of resources, always providing for my highest good.",
        'Time-Rich Autonomy': "I claim the divine right to own my time and direct my life with total freedom.",
        'Relaxed Prosperity': "Wealth is my natural state, an effortless byproduct of my authentic presence.",
        'Natural Abundance': "I breathe in the infinite resources of the universe and exhale prosperity.",
        'Wealth Resonance': "My frequency is perfectly aligned with the energy of absolute abundance.",
        'The Flow of Assets': "Resources circulate through my life with the grace of a river.",
        'Grateful Stewardship': "I lead from a place of radical gratitude, the foundation of all true wealth.",
        'Automated Wealth': "My prosperity grows with the effortless momentum of a natural law.",
        'Effortless Income': "Value flows to me in high-resolution streams, independent of struggle.",
        'Passive Abundance': "I am supported by the infinite bounty of my own alchemical creations.",
        'Strategic Financial Mastery': "I direct my resources with the precision of a master architect.",
        'Autonomous Flow': "My wealth is the engine of my absolute freedom.",
        'Wealth from My Genius': "I transmute my highest brilliance into the gold of measurable impact.",
        'Reliable Prosperity': "I walk in the certainty that my needs are met before I even ask.",
        'Geometric Growth': "My resources expand exponentially as I expand my own identity.",
        'Prosperous Security': "I am the anchor of my own financial sanctuary.",
        'Financial Sovereignity': "I am the master of my resources, answerable only to the truth.",
        'Economic Freedom': "I have transcended the bowl of lack and entered the pond of infinite choice.",
        'Universal Abundance': "I am a singular expression of the infinite wealth of the cosmos.",
        'Asset Magnetism': "I attract the high-frequency resources needed for my global mission.",
        'Infinite Resourcefulness': "I find the path to abundance in every circumstance.",
        'The Money Magnet': "Money is a tool that serves my highest purpose with absolute ease."
    },
    'physical': {
        'Prime Vitality': "My body is a high-resolution vessel for my soul’s expansion.",
        'Biological Focus': "I direct my energy with the precision of a master cell.",
        'Effortless Regeneration': "My body heals and renews itself in the stillness of my absolute peace.",
        'Vibrant Resilience': "I am the unshakeable center of my own health, radiating vitality.",
        'Kinetic Ease': "I move through the world with the grace and speed of a timeless being.",
        'Structural Peace': "My physical foundation is a sanctuary of alignment and strength.",
        'Body Consciousness': "I listen to the subtle signals of my biology with profound intuition.",
        'Biological Harmony': "My spirit and body are a single, resonant flame of absolute spirit.",
        'Peak Wellness': "I am the architect of my own physical prime.",
        'Youthful Energy': "I exist beyond the limitations of age, a perpetual inhabitant of vitality.",
        'Peak Energy': "My stamina is an infinite well, fueled by my connection to the source.",
        'Renewed Mobility': "I move with the freedom of a fish in a vast, open pond.",
        'Athletic Clarity': "I perform at my physical peak with the ease of focused presence.",
        'Biological Masterpiece': "I honor my body as a sacred expression of universal intelligence.",
        'Mastery of Form': "I am the master of my physical habits, leading from my most authentic self.",
        'Health in Flow': "My vitality is a natural current that carries me through my work.",
        'Unbound Strength': "I claim the primal power that is my birthright.",
        'Neuromuscular Precision': "My body executes my vision with the accuracy of a savant.",
        'Genetic Optimization': "I signal my biology to expand into its highest possible expression.",
        'Physical Autonomy': "I am the master of my own physical destiny.",
        'Primal Vitality': "I am a raw, unfiltered expression of the life force of the universe.",
        'The Vital Self': "I am the source of my own physical brilliance.",
        'Endless Stamina': "I move with absolute focus and effortless momentum.",
        'Radiant Health': "I embody the light of truth in every cell of my being.",
        'Physiological Mastery': "I am the master of my internal chemistry, choosing peace over stress."
    },
    'familial': {
        'Peaceful Home Sanctuary': "My home is a fortress of absolute peace and relational stillness.",
        'Domestic Autonomy': "I create a sanctuary where every member is free to expand in their own truth.",
        'Simplified Living': "I dissolve household friction into the elegance of shared purpose.",
        'Quiet Love': "My connection to my family is an unshakeable current of silent understanding.",
        'Sanctuary of Peace': "I am the anchor of calm in the midst of any domestic storm.",
        'Harmony by Design': "I build my relationships with the geometry of universal harmony.",
        'Relational Stillness': "I listen from the depth of my being, creating safety with my presence.",
        'Presence-led Parenting': "I guide the next generation through the power of my own expansion.",
        'Nurturing Environment': "My home is the soil in which the souls of my loved ones flourish.",
        'Home Comfort': "I find sanctuary in the simple, high-resolution joys of family life.",
        'Honest Partnership': "I move with my partner in the seamless harmony of radical truth.",
        'Relaxed Leadership': "I guide my household with the quiet confidence of a master.",
        'Authentic Love': "I release the performance of the 'perfect' family and embrace the truth of our connection.",
        'Resonant Connection': "We are a symphony of individuals, moving in the flow of oneness.",
        'Mutually Supportive Growth': "My family is a catalyst for my expansion, and I for theirs.",
        'Deep Emotional Safety': "My home is a space where the old story is dissolved and the new one is born.",
        'The Family Anchor': "I am the steady foundation upon which my loved ones build their lives.",
        'Sacred Connection': "Our family is a singular thread in the infinite tapestry of God.",
        'Legacy Connection': "I build relationships that endure beyond time, fueled by absolute spirit.",
        'The Peace-Maker': "I transmute friction into flow in every domestic interaction.",
        'Interpersonal Flow': "I navigate the subtle realms of family life with grace and intuition.",
        'Universal Love': "I am a singular expression of the infinite compassion of the source.",
        'Heart-Centered Presence': "I lead from my heart, the primal root of all connection.",
        'Generative Connection': "I create life and legacy in every interaction.",
        'The Supportive Root': "I am the source of stability and growth for all who enter my sanctuary."
    },
    'social': {
        'Unmasked Presence': "I exist in public exactly as I am, a beacon of radical authenticity.",
        'Social Sanctuary': "I am the unshakeable center of my own social world, radiating peace.",
        'Effortless Charisma': "My presence is my power; I influence others by simply being my true self.",
        'Authentic Connection': "I attract those who resonate with the frequency of my expansion.",
        'Peaceful Visibility': "I am seen and heard in the light of my own truth, without strain.",
        'Public Transparency': "I have nothing to hide and everything to give.",
        'Social Autonomy': "I am the master of my own social destiny, answerable only to the truth.",
        'Quiet Influence': "My words carry the weight of ancient wisdom and eternal focus.",
        'The Reflective Peer': "I see the light in others because I have found it in myself.",
        'Direct Presence': "I am hyper-present in every conversation, the master of the now.",
        'Radical Honesty': "I speak the truth even when it's uncomfortable, anchoring my world in reality.",
        'Authentic Network': "My relationships are high-resolution mirrors of my soul's purpose.",
        'Beacon of Truth': "I am a singular light in the darkness of social static.",
        'Magnetic Reputation': "Outcomes and influence are the artifacts of my unshakeable presence.",
        'Public Mastery': "I navigate the landscape of human interaction with effortless precision.",
        'Presence-led Influence': "I lead the world by the authority of my own expansion.",
        'Autonomous Social Flow': "I move with others in the seamless current of universal energy.",
        'Massive Social Impact': "My life is a catalyst for global transformation.",
        'Global Network Resonance': "I am connected to the infinite tapestry of humanity through the flow of oneness.",
        'The Social Architect': "I build communities of purpose and high-frequency connection.",
        'Masterful Networking': "I bridge disparate worlds with the ease of direct intuition.",
        'Universal Charisma': "I am a singular expression of the magnetic presence of the source.",
        'High-Resolution Visibility': "I claim my right to be seen in the fullness of my power.",
        'Unshakeable Social Ease': "I find sanctuary in any group, for I am the master of my own center.",
        'Magnetic Individualism': "I am a timeless being, a unique and powerful expression of absolute spirit."
    }
};

const State = {
    view: 'welcome',
    pillarIndex: 0,
    alchemyPhase: 'mirror',
    isRecording: false,
    identifiedFrictions: [],
    userData: {
        pillars: Object.keys(GlobalLibrary).map(id => ({
            id, name: GlobalLibrary[id].name,
            venting: "", jewel: "", selectedGems: [], probeText: ""
        })),
        smallBets: []
    }
};

function saveData() { 
    // Manual state save could be here, but current protocol is Private Sanctuary (ephemeral).
}

// --- Global Logic ---
function generateReflections(text, pillarId) {
    if (!text) return { frictions: [] };
    let words = text.toLowerCase().replace(/[^a-zA-Z\s]/g, '').split(/\s+/);
    let foundFrictions = [...new Set(words.filter(w => AspirationMap[w]))];
    return { frictions: foundFrictions };
}

function synthesizeNarrative(p) {
    const lib = AlchemicalDeclarations[p.id] || {};
    const selected = p.selectedGems.filter(g => lib[g]);
    const specificVision = p.probeText ? p.probeText.toLowerCase() : "";
    
    let script = "";

    if (specificVision) {
        script += `MY VISION MANIFESTS IN HIGH RESOLUTION:\n\n`;
        // Spiritual
        if (specificVision.includes('god') || specificVision.includes('infinity')) {
            script += `I take the sacred time to directly connect with the source of all things. Whenever I feel the old pull of struggle, I pause and return to the silence of my eternal connection.\n\n`;
        }
        if (specificVision.includes('stress') || specificVision.includes('hardship')) {
            script += `I have mastered the art of returning to center. I do not focus on the smoke of external friction; I fall back into the depth of my peaceful expansion, choosing the joy that is always present in the moment.\n\n`;
        }
        if (specificVision.includes('curiosity') || specificVision.includes('work perfectly')) {
            script += `In moments of uncertainty, I rely on the power of infinite curiosity. I ask the powerful question: "What if everything were to work perfectly?" and I allow that answer to guide my daily creation.\n\n`;
        }
        if (specificVision.includes('present') || specificVision.includes('certainty')) {
            script += `I am the master of my morning and the architect of my day. I claim the certainty of what I am creating, directing my energy with absolute autonomy and focus.\n\n`;
        }
        if (specificVision.includes('balance') || specificVision.includes('harmony')) {
            script += `I embody the alchemical balance between my spirit's nature and universal harmony. In this perfect resonance, surrender becomes effortless, and I receive the Savant Insight of the light of truth.\n\n`;
        }
        // Mental
        if (specificVision.includes('noise') || specificVision.includes('static')) {
            script += `I cut through the mental noise of the world with the precision of a master architect. My mind is a fortress of peace, anchoring only in the signal of my expansion.\n\n`;
        }
        if (specificVision.includes('genius') || specificVision.includes('creativity')) {
            script += `I claim my inherent right to exceptional clarity and unbound creativity. My ideas flow directly from the infinite source of original thought.\n\n`;
        }
        // Vocational
        if (specificVision.includes('impact') || specificVision.includes('leadership')) {
            script += `I lead from the depth of my being, my impact a natural byproduct of my authentic presence. I guide others through the power of my vision and the clarity of my intent.\n\n`;
        }
        // Wealth
        if (specificVision.includes('abundance') || specificVision.includes('freedom')) {
            script += `I enter the pond of infinite choice. Resources circulate through my life with the grace of a river, supporting my absolute freedom and global mission.\n\n`;
        }
        // Physical
        if (specificVision.includes('vitality') || specificVision.includes('strength')) {
            script += `My body is a high-resolution vessel for my soul’s expansion. I move with kinetic ease and absolute focus, fueled by an infinite well of stamina.\n\n`;
        }
        // Familial
        if (specificVision.includes('sanctuary') || specificVision.includes('connection')) {
            script += `My home is a fortress of absolute peace. I guide my household through the power of my own expansion, creating a space where every soul is free to flourish.\n\n`;
        }
        // Social
        if (specificVision.includes('presence') || specificVision.includes('authenticity')) {
            script += `I exist in the world exactly as I am, a beacon of radical authenticity. My influence is effortless, a natural result of my unshakeable center.\n\n`;
        }
    }

    if (selected.length > 0) {
        script += `I AM THE ARCHITECTURE OF MY NEW SELF:\n\n`;
        selected.forEach(gem => { script += `• ${lib[gem]}\n`; });
        script += `\n`;
    }

    return script.trim();
}

function formatGems(list) {
    if (list.length === 0) return "my desired reality";
    if (list.length === 1) return list[0];
    const last = list[list.length - 1];
    const initial = list.slice(0, -1).join(', ');
    return `${initial} and ${last}`;
}

// --- Voice Recognition ---
let recognition = null;
const VoiceController = {
    init: () => {
        const Speech = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!Speech) return;
        recognition = new Speech();
        recognition.continuous = true; recognition.interimResults = true;
        recognition.onresult = (e) => {
            let t = ''; for (let i = e.resultIndex; i < e.results.length; ++i) if (e.results[i].isFinal) t += e.results[i][0].transcript;
            const el = document.getElementById('main-input');
            if (el) { el.value += (el.value ? ' ' : '') + t; el.scrollTop = el.scrollHeight; }
        };
        recognition.onstart = () => { const wave = document.getElementById('wave-container'); if (wave) wave.classList.add('active'); };
        recognition.onend = () => { if (State.isRecording) setTimeout(() => recognition.start(), 250); else { const wave = document.getElementById('wave-container'); if (wave) wave.classList.remove('active'); } };
    },
    stop: () => { State.isRecording = false; if (recognition) recognition.stop(); }
};

// --- Surgical Interface Routing ---
window.switchTo = (v) => { 
    syncInput(); VoiceController.stop(); State.view = v; 
    const main = document.getElementById('main-content');
    if (v === 'welcome') State.pillarIndex = 0;
    if (v === 'intro') { State.alchemyPhase = 'mirror'; }
    const p = State.userData.pillars[State.pillarIndex];
    if (v === 'alchemy' && State.alchemyPhase === 'mirror') {
        const reflections = generateReflections(p.venting, p.id);
        State.identifiedFrictions = reflections.frictions;
    }
    if (v === 'alchemy' && State.alchemyPhase === 'final') {
        p.jewel = synthesizeNarrative(p);
    }
    main.innerHTML = Views[v] ? Views[v]() : "View missing."; 
    window.scrollTo(0, 0); 
};

function syncInput() {
    const el = document.getElementById('main-input');
    if (el) { 
        if (State.view === 'discovery') State.userData.pillars[State.pillarIndex].venting = el.value;
        if (State.view === 'alchemy' && State.alchemyPhase === 'probe') State.userData.pillars[State.pillarIndex].probeText = el.value;
    }
}

window.toggleMic = () => {
    syncInput(); State.isRecording = !State.isRecording;
    if (State.isRecording) { VoiceController.init(); if (recognition) recognition.start(); } 
    else { VoiceController.stop(); }
    const btn = document.querySelector('.mic-btn'); if (btn) btn.className = `mic-btn ${State.isRecording ? 'recording' : ''}`;
};

window.toggleAspiration = (term) => {
    const p = State.userData.pillars[State.pillarIndex];
    const idx = p.selectedGems.indexOf(term);
    if (idx > -1) p.selectedGems.splice(idx, 1); else p.selectedGems.push(term);
    document.querySelectorAll(`.pattern-chip[data-term="${term}"]`).forEach(c => c.classList.toggle('active'));
};

window.handleNext = () => {
    syncInput(); 
    if (State.view === 'discovery') { State.alchemyPhase = 'mirror'; window.switchTo('alchemy'); }
    else if (State.view === 'alchemy') {
        if (State.alchemyPhase === 'mirror') { State.alchemyPhase = 'probe'; window.switchTo('alchemy'); }
        else if (State.alchemyPhase === 'probe') { State.alchemyPhase = 'final'; window.switchTo('alchemy'); }
        else {
            if (State.pillarIndex < 6) { State.pillarIndex++; State.alchemyPhase = 'mirror'; window.switchTo('intro'); }
            else { window.switchTo('manifesto'); }
        }
    }
};

window.updateJewel = (val) => { State.userData.pillars[State.pillarIndex].jewel = val; };

window.purgeSanctuary = () => {
    if (confirm("This will clear all local progress and force a fresh reload. Proceed?")) {
        localStorage.clear();
        location.reload(true);
    }
};

// --- SURGICAL VIEW COMPARTMENTS ---
const Views = {
    welcome: () => getWelcomeView(),
    science: () => getScienceView(),
    intro: () => getIntroView(),
    discovery: () => getInventoryView(),
    alchemy: () => getAlchemyView(),
    manifesto: () => getManifestoView()
};

function getWelcomeView() {
    return `<div class="hero">
        <h1>Identity Alchemy</h1>
        <p class="subtitle" style="color:var(--accent);">v18.8 Harmonic Synthesis</p>
        <p class="subtitle">A Voyage into the Primal Root of Reality.</p>
        <div style="display:flex; gap:1.5rem; justify-content:center; margin-top:2rem;">
            <button class="cta-btn" onclick="window.switchTo('science')">Enter the Sanctuary</button>
            <button class="cta-btn" style="background:rgba(255,255,255,0.1); color:white; border:1px solid var(--glass-border);" onclick="window.purgeSanctuary()">Force Refresh & Reset</button>
        </div>
    </div>`;
}

function getScienceView() {
    return `<div class="glass-card fade-in"><h2 style="font-size:3rem; margin-bottom:2rem;">The Art of the Shift: From the Bowl to the Pond</h2><div class="story-content" style="line-height:1.9; color:var(--text-main); font-size:1.2rem; display:flex; flex-direction:column; gap:2.5rem;"><p class="story-text">Identity is the single most powerful force in the human psyche. It is the invisible 'Bowl' within which your entire reality is contained. No matter how much effort you put in, your results will only ever grow to the size of that container.</p><div><p class="story-text">There is a story of a goldfish, one whose growth is limited only by the size of the container it inhabits. In a small bowl, it stays three inches long. Not because of its genetics, but because the <b>Glass Walls</b> of its environment signal its biological systems to stop expanding.</p><p class="story-text">If you take that same fish and place it in a vast, open pond, it will expand to meet its environment. You are that fish. Your current identity—the story you tell yourself about who you are—is your bowl. If you want a larger life, you don't need a larger net or more 'processes.' You need a larger container. <b>You need the Pond.</b></p></div><div class="highlight-box"><h4 style="color:var(--accent); font-size:1.4rem; margin-bottom:1rem;">The Foundations of Reality</h4><p class="story-text">Sustainable growth is never found at the surface. It requires a fundamental shift in the 3 Layers of Reality Construction:</p><p style="margin-bottom:1rem;">1. <b>Outcomes (The Smoke):</b> These are the external results—wealth, health, and impact. They are merely the artifacts of who you are, not the cause of it.</p><p style="margin-bottom:1rem;">2. <b>Processes (The Flow):</b> These are your daily habits. They automatically follow the direction of your deepest identity.</p><p>3. <b style="color:var(--primary);">Identity (The Primal Root):</b> This is the 'Bowl'. When you shift the root, the flow and the smoke change automatically. We are here to change the Bowl.</p></div><div><h4 style="color:var(--primary); font-size:1.6rem; margin-bottom:1rem;">Your Journey of Transmutation</h4><p class="story-text"><b>I. The Inner Inventory:</b> We face the glass walls of your history head-on. By dumping the 'frictions' that weigh you down, we clear the space for your expansion.</p><p class="story-text"><b>II. The Selective Mirror:</b> We reflect your story back to you, listening for the 'Do Wants' hidden between the lines of your struggles. You choose the architecture of your new self.</p><p class="story-text"><b>III. The Master Script:</b> We alchemize your choices into your Ultimate Life Manifesto—the definitive blueprint for your expanded life.</p></div></div><button class="cta-btn mt-4" style="width:100%; margin-top:2rem;" onclick="window.switchTo('intro')">Begin My Transformation</button></div>`;
}

function getIntroView() {
    const p = GlobalLibrary[State.userData.pillars[State.pillarIndex].id];
    return `<div class="glass-card fade-in"><div style="position:absolute; top:2rem; right:2rem; font-size:0.8rem; color:var(--text-dim);">Pillar ${State.pillarIndex + 1}/7</div><div class="progress-container"><div class="progress-fill" style="width:${(State.pillarIndex + 1) * 14.2}%"></div></div><h4 style="color:var(--accent); text-transform:uppercase; letter-spacing:0.1em; margin-bottom:0.5rem;">Foundation</h4><h2 style="font-size:3rem;">${p.name}</h2><p class="story-text" style="margin-top:2rem;">${p.intro}</p><button class="cta-btn" style="margin-top:2rem;" onclick="window.switchTo('discovery')">Enter the Inventory</button></div>`;
}

function getInventoryView() {
    const p = State.userData.pillars[State.pillarIndex];
    const lib = GlobalLibrary[p.id];
    return `<div class="glass-card fade-in"><div style="position:absolute; top:2rem; right:2rem; font-size:0.8rem; color:var(--text-dim);">Stage: Inventory</div><div class="progress-container"><div class="progress-fill" style="width:${(State.pillarIndex + 1) * 14.2}%"></div></div><h4 style="color:var(--accent); text-transform:uppercase; letter-spacing:0.1em; margin-bottom:0.5rem;">Chapter I</h4><h2 style="font-size:3rem;">The Inventory</h2><div class="instruction-box" style="margin-bottom: 2.5rem; line-height:1.7;"><p style="color:var(--text-main); font-size:1.1rem; margin-bottom:1rem;">This is your Inventory—a space to narrate both the <b>Friction</b> and the <b>Flow</b> of your ${p.name}. We invite you to share what IS working and what ISN'T working.</p><p style="color:var(--text-dim);">Often, by speaking precisely about the historical patterns that no longer serve you, you will find yourself naturally flowing into the clarity of what you actually desire. Use the sparks below to ignite your inquiry, but let your own truth guide the narrative.</p></div><div style="font-size:1rem; border:1px solid var(--glass-border); padding:2rem; border-radius:24px; margin:2rem 0; background:rgba(0,0,0,0.2);"><ul style="padding-left:1.5rem; line-height: 1.8;">${lib.questions.map(q => `<li style="margin-bottom:0.8rem; color:var(--text-main); opacity:0.8;">${q}</li>`).join('')}</ul></div><textarea id="main-input" placeholder="Narrate your frictions and flows here...">${p.venting}</textarea><div class="voice-controls"><button class="mic-btn ${State.isRecording ? 'recording' : ''}" onclick="window.toggleMic()"><svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg></button><button class="cta-btn" onclick="handleNext()">Approach the Mirror</button></div></div>`;
}

function getAlchemyView() {
    const p = State.userData.pillars[State.pillarIndex];
    if (State.alchemyPhase === 'mirror') {
        const lib = GlobalLibrary[p.id];
        const frictionText = State.identifiedFrictions.length > 0 ? `I hear the frictions of your history, specifically around <i>${State.identifiedFrictions.join(', ')}</i>.` : "I hear the frictions of your history.";
        return `<div class="glass-card fade-in"><div style="position:absolute; top:2rem; right:2rem; font-size:0.8rem; color:var(--text-dim);">Stage: Mirror</div><h4 style="color:var(--accent); text-transform:uppercase; letter-spacing:0.1em; margin-bottom:0.5rem;">Chapter II</h4><h2 style="font-size:3rem;">The Selective Mirror</h2><div class="instruction-box" style="margin-bottom: 2.5rem; line-height:1.7;"><p style="color:var(--text-main); font-size:1.1rem; margin-bottom:1rem;">${frictionText} Now, we are going to define the geometry of your expansion.</p><p style="color:var(--text-dim);">Below are several states of being—Aspirations—that represent the inverted reality of your struggles. Select <b>multiple</b> Gems you are ready to claim as your new foundation.</p></div><h4 style="color:var(--accent); font-size:0.9rem; text-transform:uppercase; margin-bottom:1rem;">States of Being</h4><div class="pattern-grid" style="margin-bottom:2rem;">${lib.states_of_being.map(term => `<div class="pattern-chip ${p.selectedGems.includes(term) ? 'active' : ''}" data-term="${term}" onclick="window.toggleAspiration('${term}')">${term}</div>`).join('')}</div><h4 style="color:var(--primary); font-size:0.9rem; text-transform:uppercase; margin-bottom:1rem;">States of Power</h4><div class="pattern-grid">${lib.states_of_power.map(term => `<div class="pattern-chip ${p.selectedGems.includes(term) ? 'active' : ''}" data-term="${term}" onclick="window.toggleAspiration('${term}')">${term}</div>`).join('')}</div><button class="cta-btn mt-4" style="width:100%; margin-top:2rem;" onclick="handleNext()">Refine My Specifics</button></div>`;
    } else if (State.alchemyPhase === 'probe') {
        const formattedGems = formatGems(p.selectedGems);
        return `<div class="glass-card fade-in"><div style="position:absolute; top:2rem; right:2rem; font-size:0.8rem; color:var(--text-dim);">Stage: Specification</div><h4 style="color:var(--accent); text-transform:uppercase; letter-spacing:0.1em; margin-bottom:0.5rem;">Chapter III</h4><h2 style="font-size:3rem;">Mastery of Specification</h2><div class="instruction-box" style="margin-bottom: 2rem; line-height:1.7;"><p style="color:var(--text-main); font-size:1.1rem; margin-bottom:1rem;">You have claimed your new foundation: <b>${formattedGems}</b>.</p><p style="color:var(--text-dim);">Now, we must articulate the <b>Master Blueprint</b>. How do these gems weave together into a single, luminous way of life? If you were living in the absolute flow of all these states, what would your inner world and your daily interactions actually look like? Narrate the vision of your expansion, letting one gem lead naturally into the next.</p></div><textarea id="main-input" placeholder="Narrate the vision of your expansion...">${p.probeText}</textarea><div class="voice-controls"><button class="mic-btn ${State.isRecording ? 'recording' : ''}" onclick="window.toggleMic()"><svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg></button><button class="cta-btn" onclick="handleNext()">Build Master Script</button></div></div>`;
    } else { // 'final' phase
        return `<div class="glass-card fade-in"><div style="position:absolute; top:2rem; right:2rem; font-size:0.8rem; color:var(--text-dim);">Stage: Master Script</div><h4 style="color:var(--accent); text-transform:uppercase; letter-spacing:0.1em; margin-bottom:0.5rem;">Chapter IV</h4><h2 style="font-size:3rem;">The Master Script</h2><div class="alchemical-bridge"><p style="font-size:1.1rem; margin-bottom:2rem; opacity:0.8;">I have alchemized your intentions into this Identity Blueprint. Polish it for perfection:</p><div style="background:rgba(45, 212, 191, 0.05); border:1px solid var(--accent); padding:2rem; border-radius:32px;"><textarea onchange="updateJewel(this.value)" style="background:transparent; border:none; color:var(--text-main); width:100%; font-size:1.4rem; line-height:1.7; padding:0; min-height:400px; font-weight:300; white-space:pre-wrap;">${p.jewel}</textarea></div></div><button class="cta-btn mt-4" style="width:100%; margin-top:2rem;" onclick="handleNext()">${State.pillarIndex < 6 ? 'Next Chapter' : 'Finalize Manifesto'}</button></div>`;
    }
}

function getManifestoView() {
    const compiled = State.userData.pillars.filter(p => p.jewel).map(p => p.jewel).join("\n\n---\n\n");
    const fullManifesto = `I AM THE CREATOR OF MY DESIRED REALITY.\n\nI have recognized the glass walls of my historical patterns and I have stepped beyond them. I am no longer the fish in the bowl; I am the expansion of the vast pond.\n\n${compiled}\n\nI move with absolute focus and effortless momentum. I am a Timeless Being living in Absolute Spirit. This is not who I am becoming; this is who I am.\n\nSO IT IS.`;

    return `<div class="glass-card fade-in">
        <h1>Ultimate Life Manifesto</h1>
        <div style="background:rgba(255,255,255,0.05); border:1px solid var(--glass-border); padding:3rem; border-radius:32px; margin-top:2rem; font-size:1.2rem; line-height:1.8; white-space:pre-wrap; color:var(--text-main); font-weight:300;">${fullManifesto}</div>
        <button class="cta-btn mt-4" style="width:100%; margin-top:3rem;" onclick="window.print()">Print Master Script</button>
        <button class="cta-btn mt-4" style="width:100%; background:rgba(255,255,255,0.1); color:white; border:1px solid var(--glass-border);" onclick="if(confirm('Clear all progress?')) { location.reload(); }">Reset Sanctuary</button>
    </div>`;
}

document.addEventListener('DOMContentLoaded', () => { window.switchTo('welcome'); VoiceController.init(); });
