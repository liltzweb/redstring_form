window.FORM_CONFIG = {
  product: {
    code: 'redstring',
    name: 'redstring',
    badge: 'interactive stepped red string narrative',
    price: 20000,
    priceFormatted: 'Rp 20.000',
    tagline: 'the string that led me to you — interactive stepped red thread romantic narrative with 9 story chapters, 3D flip polaroids, diner receipts, memory stops, unsealed love envelopes, and wax-sealed letter.'
  },
  context: {
    formCode: 'REDSTR-ORD',
    edition: '2026 Red String Anniversary Edition',
    description: 'Redstring (also known as redtwin / the string that led me to you) is an interactive 9-step stepped romantic story website featuring an invisible red thread connecting two souls, before/after reflections, 3D flip polaroid encounter card, 3 memory stops with diner receipts, 3-year timeline milestones, 4 interactive love envelopes, a wax-sealed unrolling anniversary letter, and closing eternity outro.'
  },
  motif: '🧶',
  mediaDescription: '5 Foto (Encounter Polaroid + 3 Memory Stops + Letter Photo) + 1 File Musik MP3',
  theme: {
    name: 'redstring',
    palette: ['#1A0B0E', '#2B1217', '#C93B4E', '#F5E6E8', '#8B2635', '#E56B7A']
  },
  sections: [
    {
      id: 'step_0_cover',
      number: '02',
      title: 'Step 00 — Cover & The Red Thread Myth',
      description: 'The opening cover screen celebrating the invisible thread that connected two souls.',
      fields: [
        {
          id: 'story_title',
          label: 'Main Story Title',
          type: 'text',
          placeholder: 'e.g. the string that led me to you',
          defaultValue: 'the string that led me to you',
          required: true,
          helpText: 'Main title of the website.'
        },
        {
          id: 'story_dedication',
          label: 'Dedication Line / Date Span',
          type: 'text',
          placeholder: 'e.g. a love letter for kania, august 28, 2023 – august 28, 2026',
          defaultValue: 'a love letter for kania, august 28, 2023 – august 28, 2026',
          required: true,
          helpText: 'Subtitle dedication with recipient name and date range.'
        },
        {
          id: 'story_landscape_quote',
          label: 'Landscape Hero Card Quote',
          type: 'text',
          placeholder: 'e.g. the story of how my favorite person became my whole world',
          defaultValue: 'the story of how my favorite person became my whole world',
          required: true,
          helpText: 'Quote banner on the top cover image.'
        },
        {
          id: 'thread_myth_line_1',
          label: 'Red Thread Narrative Line 01',
          type: 'textarea',
          placeholder: 'e.g. they say an invisible red thread ties two souls together.',
          defaultValue: 'they say an invisible red thread ties two souls together.',
          required: true
        },
        {
          id: 'thread_myth_line_2',
          label: 'Red Thread Narrative Line 02',
          type: 'textarea',
          placeholder: 'e.g. i used to think it was just a poetic myth.',
          defaultValue: 'i used to think it was just a poetic myth.',
          required: true
        },
        {
          id: 'thread_myth_line_3',
          label: 'Red Thread Narrative Line 03',
          type: 'textarea',
          placeholder: 'e.g. until august 28, 2023, when it led me straight to you.',
          defaultValue: 'until august 28, 2023, when it led me straight to you.',
          required: true
        },
        {
          id: 'step_0_button',
          label: 'Step 0 Advance Button Label',
          type: 'text',
          placeholder: 'e.g. follow the thread to my favorite girl',
          defaultValue: 'follow the thread to my favorite girl',
          required: true
        }
      ]
    },
    {
      id: 'step_1_before',
      number: '03',
      title: 'Step 01 — Before Meeting You (Waiting World)',
      description: 'Reflections on life before finding your person.',
      fields: [
        {
          id: 'step_1_title',
          label: 'Section Heading',
          type: 'text',
          placeholder: 'e.g. back when my world was waiting for you.',
          defaultValue: 'back when my world was waiting for you.',
          required: true
        },
        {
          id: 'step_1_story',
          label: 'Story Reflection Paragraph',
          type: 'textarea',
          placeholder: 'e.g. i was just going through ordinary days, having no idea that the prettiest smile, the sweetest laugh, and the warmest heart were already waiting for me at the end of the thread.',
          defaultValue: 'i was just going through ordinary days, having no idea that the prettiest smile, the sweetest laugh, and the warmest heart were already waiting for me at the end of the thread.',
          required: true
        },
        {
          id: 'step_1_scrap_quote',
          label: 'Scrap Note Quote',
          type: 'textarea',
          placeholder: 'e.g. i never truly understood what home felt like until you became my everyday.',
          defaultValue: 'i never truly understood what home felt like until you became my everyday.',
          required: true
        },
        {
          id: 'step_1_button',
          label: 'Step 01 Button Label',
          type: 'text',
          placeholder: 'e.g. the day everything changed',
          defaultValue: 'the day everything changed',
          required: true
        }
      ]
    },
    {
      id: 'step_2_encounter',
      number: '04',
      title: 'Step 02 — The Encounter (3D Flip Polaroid Card)',
      description: 'The milestone day the relationship officially began with 3D flip card secret note.',
      fields: [
        {
          id: 'encounter_date',
          label: 'Official Start Date',
          type: 'text',
          placeholder: 'e.g. August 28, 2023',
          defaultValue: 'August 28, 2023',
          required: true
        },
        {
          id: 'encounter_subtitle',
          label: 'Milestone Tagline',
          type: 'text',
          placeholder: 'e.g. the day the thread officially tied our hearts together.',
          defaultValue: 'the day the thread officially tied our hearts together.',
          required: true
        },
        {
          id: 'encounter_secret_back',
          label: 'Flip Card Secret Back Note',
          type: 'textarea',
          placeholder: 'e.g. the day you officially said yes. my hands were shaking, but when you smiled at me, all my worries disappeared.',
          defaultValue: 'the day you officially said yes. my hands were shaking, but when you smiled at me, all my worries disappeared.',
          required: true,
          helpText: 'Secret love note revealed when tapping/flipping the polaroid card.'
        },
        {
          id: 'encounter_stamp_tag',
          label: 'Stamp Tag (Sender & Date)',
          type: 'text',
          placeholder: 'e.g. A NOTE FROM ARKAN • 28.08.2023',
          defaultValue: 'A NOTE FROM ARKAN • 28.08.2023',
          required: true
        },
        {
          id: 'step_2_button',
          label: 'Step 02 Button Label',
          type: 'text',
          placeholder: 'e.g. remembering our moments',
          defaultValue: 'remembering our moments',
          required: true
        }
      ]
    },
    {
      id: 'step_3_memories',
      number: '05',
      title: 'Step 03 — Memory Stops & Midnight Diner Receipt',
      description: 'Interactive carousel with 3 memory stops and tabbed diner receipt secrets.',
      fields: [
        {
          id: 'memories_title',
          label: 'Section Heading',
          type: 'text',
          placeholder: 'e.g. the moments i replay in my head.',
          defaultValue: 'the moments i replay in my head.',
          required: true
        },
        {
          id: 'memories_intro',
          label: 'Section Description',
          type: 'text',
          placeholder: 'e.g. choose a stop along our thread to look back on:',
          defaultValue: 'choose a stop along our thread to look back on:',
          required: true
        },
        {
          id: 'stop_1_label',
          label: 'Stop 01 Title (Tab Button)',
          type: 'text',
          placeholder: 'e.g. 4 AM Talks',
          defaultValue: '4 AM Talks',
          required: true
        },
        {
          id: 'stop_1_story',
          label: 'Stop 01 Story Note',
          type: 'textarea',
          placeholder: 'e.g. staying up till 4 AM listening to your voice get soft and sleepy',
          defaultValue: 'staying up till 4 AM listening to your voice get soft and sleepy',
          required: true
        },
        {
          id: 'stop_2_label',
          label: 'Stop 02 Title (Midnight Diner)',
          type: 'text',
          placeholder: 'e.g. Midnight Diner',
          defaultValue: 'Midnight Diner',
          required: true
        },
        {
          id: 'receipt_item_1_name',
          label: 'Diner Receipt Item 01 Name',
          type: 'text',
          placeholder: 'e.g. 1x Iced Americano',
          defaultValue: '1x Iced Americano',
          required: true
        },
        {
          id: 'receipt_item_1_secret',
          label: 'Diner Receipt Item 01 Secret Note',
          type: 'textarea',
          placeholder: 'e.g. watching you take your first sip and making that silly satisfied face',
          defaultValue: 'watching you take your first sip and making that silly satisfied face',
          required: true
        },
        {
          id: 'receipt_item_2_name',
          label: 'Diner Receipt Item 02 Name',
          type: 'text',
          placeholder: 'e.g. 1x Earl Grey Milk Tea',
          defaultValue: '1x Earl Grey Milk Tea',
          required: true
        },
        {
          id: 'receipt_item_2_secret',
          label: 'Diner Receipt Item 02 Secret Note',
          type: 'textarea',
          placeholder: 'e.g. your favorite drink in the whole world, sweet just like you',
          defaultValue: 'your favorite drink in the whole world, sweet just like you',
          required: true
        },
        {
          id: 'receipt_item_3_name',
          label: 'Diner Receipt Item 03 Name',
          type: 'text',
          placeholder: 'e.g. 1x Quiet Car Ride Home',
          defaultValue: '1x Quiet Car Ride Home',
          required: true
        },
        {
          id: 'receipt_item_3_secret',
          label: 'Diner Receipt Item 03 Secret Note',
          type: 'textarea',
          placeholder: 'e.g. holding your hand at red lights wishing the drive would never end',
          defaultValue: 'holding your hand at red lights wishing the drive would never end',
          required: true
        },
        {
          id: 'stop_3_label',
          label: 'Stop 03 Title (Tab Button)',
          type: 'text',
          placeholder: 'e.g. Your Laugh',
          defaultValue: 'Your Laugh',
          required: true
        },
        {
          id: 'stop_3_story',
          label: 'Stop 03 Story Note',
          type: 'textarea',
          placeholder: 'e.g. the way your eyes crinkle when you laugh – my absolute favorite view',
          defaultValue: 'the way your eyes crinkle when you laugh – my absolute favorite view',
          required: true
        },
        {
          id: 'step_3_button',
          label: 'Step 03 Button Label',
          type: 'text',
          placeholder: 'e.g. through every high and low',
          defaultValue: 'through every high and low',
          required: true
        }
      ]
    },
    {
      id: 'step_4_choose',
      number: '06',
      title: 'Step 04 — Choosing You Every Time (Commitment)',
      description: 'Honest devotion through highs, lows, and stubborn days.',
      fields: [
        {
          id: 'step_4_title',
          label: 'Section Heading',
          type: 'text',
          placeholder: 'e.g. and i would still choose you, every single time.',
          defaultValue: 'and i would still choose you, every single time.',
          required: true
        },
        {
          id: 'step_4_line_1',
          label: 'Commitment Line 01',
          type: 'textarea',
          placeholder: 'e.g. we aren't always perfect.',
          defaultValue: 'we aren't always perfect.',
          required: true
        },
        {
          id: 'step_4_line_2',
          label: 'Commitment Line 02',
          type: 'textarea',
          placeholder: 'e.g. we had our stubborn moments, our tired days, and times when things felt heavy.',
          defaultValue: 'we had our stubborn moments, our tired days, and times when things felt heavy.',
          required: true
        },
        {
          id: 'step_4_line_3',
          label: 'Commitment Line 03',
          type: 'textarea',
          placeholder: 'e.g. but whenever i look into your eyes, there is no one else in this whole world i'd rather hold hands with through the storm.',
          defaultValue: 'but whenever i look into your eyes, there is no one else in this whole world i'd rather hold hands with through the storm.',
          required: true
        },
        {
          id: 'step_4_button',
          label: 'Step 04 Button Label',
          type: 'text',
          placeholder: 'e.g. three years of loving you',
          defaultValue: 'three years of loving you',
          required: true
        }
      ]
    },
    {
      id: 'step_5_years',
      number: '07',
      title: 'Step 05 — 3-Year Milestones Timeline',
      description: 'Timeline cards highlighting growth across Year 1, Year 2, and Year 3.',
      fields: [
        {
          id: 'timeline_heading',
          label: 'Section Heading',
          type: 'text',
          placeholder: 'e.g. 3 whole years with my dream girl.',
          defaultValue: '3 whole years with my dream girl.',
          required: true
        },
        {
          id: 'timeline_days_counter',
          label: 'Days / Months Counter Subtitle',
          type: 'text',
          placeholder: 'e.g. 36 months, 1,096 days, and i still fall for you more and more every single morning.',
          defaultValue: '36 months, 1,096 days, and i still fall for you more and more every single morning.',
          required: true
        },
        {
          id: 'year_1_tag',
          label: 'Year 01 Tag Label',
          type: 'text',
          placeholder: 'e.g. year 01 (2023 – 2024)',
          defaultValue: 'year 01 (2023 – 2024)',
          required: true
        },
        {
          id: 'year_1_memory',
          label: 'Year 01 Memory Growth',
          type: 'textarea',
          placeholder: 'e.g. learning how to fit into each other's worlds and figuring out that we're so much better together.',
          defaultValue: 'learning how to fit into each other's worlds',
          required: true
        },
        {
          id: 'year_2_tag',
          label: 'Year 02 Tag Label',
          type: 'text',
          placeholder: 'e.g. year 02 (2024 – 2025)',
          defaultValue: 'year 02 (2024 – 2025)',
          required: true
        },
        {
          id: 'year_2_memory',
          label: 'Year 02 Memory Growth',
          type: 'textarea',
          placeholder: 'e.g. that quiet comfort where your presence makes any bad day instantly better.',
          defaultValue: 'that quiet comfort where your presence makes any bad day better',
          required: true
        },
        {
          id: 'year_3_tag',
          label: 'Year 03 Tag Label',
          type: 'text',
          placeholder: 'e.g. year 03 (2025 – 2026)',
          defaultValue: 'year 03 (2025 – 2026)',
          required: true
        },
        {
          id: 'year_3_memory',
          label: 'Year 03 Memory Growth',
          type: 'textarea',
          placeholder: 'e.g. realizing that my favorite place in the entire world is wherever you are.',
          defaultValue: 'realizing that my favorite place in the entire world is wherever you are',
          required: true
        },
        {
          id: 'step_5_button',
          label: 'Step 05 Button Label',
          type: 'text',
          placeholder: 'e.g. the little things that make me love you',
          defaultValue: 'the little things that make me love you',
          required: true
        }
      ]
    },
    {
      id: 'step_6_envelopes',
      number: '08',
      title: 'Step 06 — 4 Love Envelopes (Tiny Habits)',
      description: 'Interactive unsealed envelopes with personal confessions and habits.',
      fields: [
        {
          id: 'envelopes_heading',
          label: 'Section Heading',
          type: 'text',
          placeholder: 'e.g. the tiny habits i fell in love with.',
          defaultValue: 'the tiny habits i fell in love with.',
          required: true
        },
        {
          id: 'envelopes_intro',
          label: 'Section Instruction',
          type: 'text',
          placeholder: 'e.g. tap each envelope below to unlock my secret thought',
          defaultValue: 'tap each envelope below to unlock my secret thought',
          required: true
        },
        {
          id: 'envelope_1_secret',
          label: 'Envelope 01 Secret Thought',
          type: 'textarea',
          placeholder: 'e.g. when you send me random 2-minute voice notes on your walk home, hearing your voice is always the best part of my day.',
          defaultValue: 'when you send me random 2-minute voice notes on your walk home, hearing your voice is always the best part of my day.',
          required: true
        },
        {
          id: 'envelope_2_secret',
          label: 'Envelope 02 Secret Thought',
          type: 'textarea',
          placeholder: 'e.g. whenever you randomly look up and give me that little shy smile, my heart still skips a beat like it's day one.',
          defaultValue: 'whenever you randomly look up and give me that little shy smile, my heart still skips a beat like it's day one.',
          required: true
        },
        {
          id: 'envelope_3_secret',
          label: 'Envelope 03 Secret Thought',
          type: 'textarea',
          placeholder: 'e.g. your hand fits so effortlessly in mine. whenever i hold it, every ounce of stress melts away.',
          defaultValue: 'your hand fits so effortlessly in mine. whenever i hold it, every ounce of stress melts away.',
          required: true
        },
        {
          id: 'envelope_4_secret',
          label: 'Envelope 04 Secret Thought',
          type: 'textarea',
          placeholder: 'e.g. the random 'have you eaten yet?' texts and the way you care so deeply about everything. you make me want to be better every day.',
          defaultValue: 'the random 'have you eaten yet?' texts and the way you care so deeply about everything. you make me want to be better every day.',
          required: true
        },
        {
          id: 'step_6_button',
          label: 'Step 06 Button Label',
          type: 'text',
          placeholder: 'e.g. my letter for you',
          defaultValue: 'my letter for you',
          required: true
        }
      ]
    },
    {
      id: 'step_7_letter',
      number: '09',
      title: 'Step 07 — Wax-Sealed Anniversary Letter',
      description: 'Unrolling heartfelt anniversary letter with wax seal, telegram reply link, and signature.',
      fields: [
        {
          id: 'wax_seal_initials',
          label: 'Wax Seal Stamp Text',
          type: 'text',
          placeholder: 'e.g. A & K • for my kania',
          defaultValue: 'A & K • for my kania',
          required: true,
          helpText: 'Initials & name on the wax seal.'
        },
        {
          id: 'letter_teaser_1',
          label: 'Seal Teaser Line 01',
          type: 'textarea',
          placeholder: 'e.g. they say soulmates are bound by a thread that can stretch or tangle, but never break.',
          defaultValue: 'they say soulmates are bound by a thread that can stretch or tangle, but never break.',
          required: true
        },
        {
          id: 'letter_teaser_2',
          label: 'Seal Teaser Line 02',
          type: 'textarea',
          placeholder: 'e.g. with you, kania, i found my answer to everything.',
          defaultValue: 'with you, kania, i found my answer to everything.',
          required: true
        },
        {
          id: 'letter_salutation',
          label: 'Letter Greeting / Salutation',
          type: 'text',
          placeholder: 'e.g. my dearest kania,',
          defaultValue: 'my dearest kania,',
          required: true
        },
        {
          id: 'letter_body',
          label: 'Full Love Letter Content',
          type: 'textarea',
          placeholder: 'e.g. happy 3rd anniversary, my love. thank you for three beautiful years of love, warmth, and laughter. being yours is the greatest gift...',
          defaultValue: 'happy 3rd anniversary, my love. thank you for three beautiful years of endless patience, soft giggles, and making everywhere we go feel like home. no matter where life leads us next, my heart is tied to yours forever.',
          required: true
        },
        {
          id: 'letter_signoff',
          label: 'Letter Sign-off / Sender Name',
          type: 'text',
          placeholder: 'e.g. forever yours, arkan',
          defaultValue: 'forever yours, arkan',
          required: true
        },
        {
          id: 'reply_telegram_button',
          label: 'Telegram Reply Button Label',
          type: 'text',
          placeholder: 'e.g. send reply to arkan',
          defaultValue: 'send reply to arkan',
          required: true
        },
        {
          id: 'step_7_button',
          label: 'To Forever Button Label',
          type: 'text',
          placeholder: 'e.g. to our forever',
          defaultValue: 'to our forever',
          required: true
        }
      ]
    },
    {
      id: 'step_8_outro',
      number: '10',
      title: 'Step 08 — Eternity Outro & Replay',
      description: 'Closing screen celebrating years together and lifetime replay.',
      fields: [
        {
          id: 'outro_title',
          label: 'Outro Heading',
          type: 'text',
          placeholder: 'e.g. 3 years down, a lifetime to go.',
          defaultValue: '3 years down, a lifetime to go.',
          required: true
        },
        {
          id: 'outro_quote',
          label: 'Outro Quote',
          type: 'textarea',
          placeholder: 'e.g. still choosing you, always and forever.',
          defaultValue: 'still choosing you, always and forever.',
          required: true
        },
        {
          id: 'outro_signature',
          label: 'Outro Signature',
          type: 'text',
          placeholder: 'e.g. – arkan',
          defaultValue: '– arkan',
          required: true
        },
        {
          id: 'outro_replay_button',
          label: 'Replay Button Label',
          type: 'text',
          placeholder: 'e.g. return to the beginning',
          defaultValue: 'return to the beginning',
          required: true
        }
      ]
    }
  ]
};
