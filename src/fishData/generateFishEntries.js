const generateFishEntries = () => {
  const fishEntries = [
    {
      id: 21,
      title: "Dace",
      price: 240,
      category: "Fish",
      subcategory: "River",
      description: "I caught a dace! Hope I have some space!",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczPqiCFAMRYwAwlHBIfojY1t3ciBS7KyLFlRGMTktPOHDd4EVU4NHevYKXqZ5KlybfYs-rI-UQQHSJAdL2p5rWCsyzDl6W30d5rgnMiW7mOBNvPLhQ=w2400",
      rate: {
        count: 20,
        rate: 4.8,
      },
    },
    {
      id: 22,
      title: "Mitten Crab",
      price: 2000,
      category: "Fish",
      subcategory: "River",
      description: "I caught a mitten crab! One more and I'm ready for winter!",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczP9w9FJ7HLyuouaOqQErbTRc3gt7QFrJ_Tb21ThJoTL5b3BHKO41QVtbrpRuxQKaa4OOa4aWZvB8oJYMAb91bnCvlWWdPNNE2xz_rBUL_PiprLYGw=w2400",
      rate: {
        count: 15,
        rate: 4.5,
      },
    },
    {
      id: 23,
      title: "Salmon",
      price: 700,
      category: "Fish",
      subcategory: "River",
      description: "I caught a salmon! It's all upstream from here!",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczOjW1Li4BYx6SHKISylC0FKYVl5CHbC0Y6vSZs13A7AVhCvvw1H6kaDXYnb8Lmv6u-_1fzqcTIVPVyXIPKMJRi0CofGL12VrvDTzNeYKhw0YYIlQA=w2400",
      rate: {
        count: 25,
        rate: 4.7,
      },
    },
    {
      id: 24,
      title: "Football Fish",
      price: 2500,
      category: "Fish",
      subcategory: "Ocean",
      description:
        "I caught a football fish! Some countries call it a soccer fish!",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczMsMpJdzOP2jlA6Hk0rIjW9HuiHRUXIAuV1LiulplfBmAYwuSzqFz9YHSu9ZjzplbbcZOEkpQu0Ur3baqLfb_U_yDEXHRIxOzNBeiwij8Eg01BcRQ=w2400",
      rate: {
        count: 30,
        rate: 4.9,
      },
    },
    {
      id: 25,
      title: "Puffer fish",
      price: 250,
      category: "Fish",
      subcategory: "Ocean",
      description:
        "I caught a puffer fish! I thought you would be tougher, fish!",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczNEjf4Ix4ezZ1TTFzbN8OrtxXBLrEzK8pdS2IeON80uxHgwG6eNG46ffqPeTrukcF5sfco-CXYc2FWazSrXiM2X6osQz2GV64iz2zpcPsfGDE83og=w2400",
      rate: {
        count: 18,
        rate: 4.2,
      },
    },
    {
      id: 26,
      title: "Olive flounder",
      price: 800,
      category: "Fish",
      subcategory: "Ocean",
      description: "I caught an olive flounder! That's not the pits!",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczNHwJwDTrKqMa92EkRUhaXa0jawd9IGQaewi6NnXVdBG50mGDPRP3-T-9aGSI8DPZvqAtVlEpf4YpT5A1IyGtfdUL393uzdUW9MQCkc-zKyNnqrjw=w2400",
      rate: {
        count: 22,
        rate: 4.6,
      },
    },
    {
      id: 27,
      title: "Carp",
      price: 300,
      category: "Fish",
      subcategory: "Pond",
      description: "I caught a carp! If i catch another they can carpool!",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczN5oLGtgW7WYdlI_jV8GcB7asVxQr7Mmng1pKDdLptDfbbh_-CcfWi4Lj6eEJIF8aAEht1jKoYC4aNDb5FVO6rVi9HE1KsPmwPe_6K0-Ysw0Mg6oQ=w2400",
      rate: {
        count: 12,
        rate: 4.0,
      },
    },
    {
      id: 28,
      title: "Crawfish",
      price: 200,
      category: "Fish",
      subcategory: "Pond",
      description:
        "I caught a crawfish! Or else it's a lobster, and I'm a giant!",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczOHpcEvZuiLzBZ1yV80k9UVLHyQ8vxQZjr5Ge6G-XjhFXyUWP0S942Ar1wtT_bYOrPNs0e5HSuVvLdxqF9DDLEdoTvdgKU6eRrH-hb8gNw1Sfq4Fg=w2400",
      rate: {
        count: 10,
        rate: 3.8,
      },
    },
    {
      id: 29,
      title: "Freshwater goby",
      price: 400,
      category: "Fish",
      subcategory: "River",
      description: "I caught a freshwater goby! Time to go bye-bye!",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczOOSxPROw8G2s5YUhkzMnaCPftzpL4VfF1VVaF3ErSNbNQwxZRrNNUYpQqVuZtEu54q3P0yplbRTIUDW_wyBbfFPZ_eCzJhODucBnOsyFyh-hyEvNQ=w2400",
      rate: {
        count: 20,
        rate: 4.4,
      },
    },
    {
      id: 30,
      title: "Catfish",
      price: 800,
      category: "Fish",
      subcategory: "Pond",
      description: "I caught a catfish! I'm more of a dogfish person...",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczNL0JGQmfXiOYW4QqUSIYAP02BeY6euNbJ---9m7ih5K3MlKpY36hvbNHmV_bIOeZKii9z9SQjL37i3k3wnL_97lfKgNUz7I1wXHm6OqBtOE2N78g=s256-p-k",
      rate: {
        count: 15,
        rate: 4.6,
      },
    },
    {
      id: 31,
      title: "Lobster",
      price: 4500,
      category: "Fish",
      subcategory: "Ocean",
      description: "I got a lobster! Lobjective complete.",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczMecU193pmJDkKY0zPijQMbdlyADt12SXs4Jybo2axfEcy49LmbFx-v_us7A3EkyH-UDHTQgHifiUhHeJCV017nz4Ey76weEYsv3YyZIrV6PDTv6Q=w2400",
      rate: {
        count: 8,
        rate: 4.7,
      },
    },
    {
      id: 32,
      title: "Yellow Perch",
      price: 300,
      category: "Fish",
      subcategory: "River",
      description:
        "I caught a yellow perch! Those yellow birds have to sit somewhere!",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczOFf2aqZKR4kSar-WbTVBdXrGMgSVsxTm_bZvjL3jyhdCYcGWlXh1SvpSIaGt9fmLQ449EDZO5JueII5BwEpBzF8B28pS6K26XV6NJ9aycaG162UQ=w2400",
      rate: {
        count: 12,
        rate: 4.1,
      },
    },
    {
      id: 33,
      title: "Black bass",
      price: 400,
      category: "Fish",
      subcategory: "River",
      description: "I caught a black bass! The most metal of all fish!",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczNcP_SVjUmaW_ugXzy2sfuuVJndjNCN2jghRfxhti-2fY5t2NuAIahbg_UR3s91PWQmYPzhDoPR7iJX3qQpUQ8goBGZqVxhMlmc8TD5RyblebwlCQ=w2400",
      rate: {
        count: 18,
        rate: 4.3,
      },
    },
    {
      id: 34,
      title: "Tilapia",
      price: 800,
      category: "Fish",
      subcategory: "River",
      description: "I caught a tilapia! It makes me happy-a!",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczMuDuV3kV8hrNj8Hou-MIjzxUZNcuLlPeGAeaKzq1H8rHMbe87cecG5qT6kCj1YPKKQXIiIl6bfT6q0Og2Bn98SL6AJs_Ju_YQlOjIDjRYxokBk4A=w2400",
      rate: {
        count: 25,
        rate: 4.5,
      },
    },
    {
      id: 35,
      title: "Pike",
      price: 1800,
      category: "Fish",
      subcategory: "River",
      description: "I caught a pike! Think a swordfish would be up for a duel?",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczP2Nf19CZdD_QOWClm90r2EiTel5Uzc-HAI1Gh7ofIsHXCusUucIHPc2GkBXj7ewyLPDCj_lO_rbaBK5ToN5wdSy6BlpWELwiFd_qvMQIYdsCg8TQ=w2400",
      rate: {
        count: 30,
        rate: 4.8,
      },
    },
    {
      id: 36,
      title: "Cherry salmon",
      price: 1000,
      category: "Fish",
      subcategory: "River",
      description:
        "I caught a cherry salmon! It's the perfect topper for a marlin sundae!",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczN90TvYGQQEFQ_oqqhx3Pp-pj9eu3_upY2J-MjEe8YIMZOT52LOeTIlZ718-6boV9H5p83UqwPp7WJoewPPRh9_QcvsbJdTiq1SZVfPzhxeuKXuCA=w2400",
      rate: {
        count: 20,
        rate: 4.7,
      },
    },
    {
      id: 37,
      title: "Sweetfish",
      price: 900,
      category: "Fish",
      subcategory: "River",
      description: "I caught a sweetfish! Hope it's not artificially sweet!",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczNNOF6gtIxlOJX8Lulz-7_eggJOSnRFiJqu-RGms7BRMNrS7I3MPJ_zWaMzY7YFE0mpKi5TMP9RpAfTNcEAl3ypxHNKJNqlVyykyB_fV504K_dGiQ=w2400",
      rate: {
        count: 25,
        rate: 4.6,
      },
    },
    {
      id: 38,
      title: "Char",
      price: 3800,
      category: "Fish",
      subcategory: "River",
      description: "I caught a char! Now I'm gonna sit on it!",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczM46H2x8iTk4Fu6EJSzINJILIb5JGNAnAXmZW1zP_io0MEOKPSXPTUNZXnKuUC6zBZapcbpIUJOznZQyw5jwMbNk31qZW3K8qBduEr8ZfT7ppn3Cg=w2400",
      rate: {
        count: 18,
        rate: 4.3,
      },
    },
    {
      id: 39,
      title: "Blue marlin",
      price: 10000,
      category: "Fish",
      subcategory: "Ocean",
      description:
        "I caught a blue marlin! Listen to this fish. it's got a point.",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczPq-eHyvwmhr62hV7t0tGMETCdbB9vK-QoCZ5imkyCc_iuyD1ilRJz3zES0G2NPKVRPpWE5fE1vljAw7Bkh0zTHdLJDTPj6Ln4c6d9J3ydc4nNsZg=w2400",
      rate: {
        count: 30,
        rate: 4.9,
      },
    },
    {
      id: 40,
      title: "Mahi-mahi",
      price: 6000,
      category: "Fish",
      subcategory: "Ocean",
      description: "I caught a mahi-mahi! It’s all mahine-mahine.",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczM0M3smvehBihpZpOHfJ6Kxd9kR6SFWnrWY6g9zd2ELvXlkuBH1C0l5KVE-nXwarFiuiDVTHyftOEzPV4rATYRyk67AgHZjTrvOR05MGQYAN-1vqQ=w2400",
      rate: {
        count: 22,
        rate: 4.7,
      },
    },
    {
      id: 41,
      title: "Snapping Turtle",
      price: 5000,
      category: "Fish",
      subcategory: "Pond",
      description:
        "I caught a snapping turtle! How can it snap without fingers?",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczNj8MJSKslisweFZA3QLFk5t3iWFMQ6sCtxRrPPhuLYaQLudnLDXFua_QckaNWfDPsDQBtDLz985-ZXlVQUXGnFYG0rVI_oXnwIKDjCqufOOBEz-LE=w2400",
      rate: {
        count: 18,
        rate: 3.5,
      },
    },
    {
      id: 42,
      title: "Soft-shelled Turtle",
      price: 3750,
      category: "Fish",
      subcategory: "River",
      description:
        "I caught a soft-shelled turtle! I think it's more sensitive than other turtles.",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczPD5mrEGO_d5wxa4jHPlbtI5QC5taCAOHOTMvRoPsvO5SKaiqzfi5Z2SxNiS_q5FnUsGZnDPoClZW9ctJcnb5CHf0VVHZ5dsi3UWWALwo9Sl71-qRY=w2400",
      rate: {
        count: 12,
        rate: 4.2,
      },
    },
    {
      id: 43,
      title: "Napoleonfish",
      price: 1500,
      category: "Fish",
      subcategory: "Ocean",
      description: "I caught a Napoleonfish! It's not as big as it thinks!",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczNuV7x2b9m4SKB0Sc9rvaDczc63wFHAwR42sHjXbaxfd4twJb0JBwV5yXFxw5-APhI7B4fK1iFY4r9XyeA0FOfdvCDkYpkJq7-trbwWHfs1bQG0_hk=w2400",
      rate: {
        count: 7,
        rate: 4.9,
      },
    },
    {
      id: 44,
      title: "Pond Smelt",
      price: 500,
      category: "Fish",
      subcategory: "Pond",
      description: "I caught a pond smelt! Whoever smelt it dealt it!",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczPAxk20mIZGP1vCyQ5hE456d0nOKlZWNglksqzC_CRcnNGQJYIx_82LU2ZfbAadTat8jhVOEdWU2AsL33IrkY_N0ykXCxbY929krMDL6OJWIFijtNM=w2400",
      rate: {
        count: 23,
        rate: 4.7,
      },
    },
    {
      id: 45,
      title: "Tadpole",
      price: 100,
      category: "Fish",
      subcategory: "River",
      description: "I caught a tadpole! It's just a tad small.",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczPtnBqU3BQGnkqUPwIZDhUCJsVn1mW47m-XN1rBMdm8CS2UMXt7e5WyoNfGsjvDrh4zFCUrVZL_SnsXopYTrRszApPm1sKc50dEokagCrGH-fb4GUQ=w2400",
      rate: {
        count: 14,
        rate: 4.3,
      },
    },
    {
      id: 46,
      title: "Angelfish",
      price: 3000,
      category: "Fish",
      subcategory: "Ocean",
      description: "I caught an angelfish! That other fish told me to do it!",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczNfBdBTf9UjonWDs-ik300Bht9dI_d_BRYrFGFT4yGufMKqZ64bchgalmN_PMbqhFI_7EdTw77L-HOxu_EwCSkJ_4LFSvs8BP_-21ntFco_0uaVuQE=w2400",
      rate: {
        count: 31,
        rate: 4.8,
      },
    },
    {
      id: 47,
      title: "Rainbowfish",
      price: 800,
      category: "Fish",
      subcategory: "River",
      description: "I caught a rainbowfish! Where's my pot of goldfish?",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczMEUxcZgb6TChIpsoSG7iQKNq82UxfbJgDek1pQBK5mZdkngCPgjJAb3Y0qLQ_Iy-wbTkJSLCYbpzJXosiNqS1RQ-BXZWkZlGxX2GptZCL1Ex-Hm7g=w2400",
      rate: {
        count: 9,
        rate: 4.5,
      },
    },
    {
      id: 48,
      title: "Goldfish",
      price: 1300,
      category: "Fish",
      subcategory: "Pond",
      description: "I caught a goldfish! It's worth its weight in fish!",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczPf4LSNPSgpelTrwb9ZVA-PHDIIV1aAAD9BHp3B-9d2Jl37sSABXTTPmzaaFOYpCWnQeiKGWM9tSreSAKQVD6IrL_lImIVfOovmPZuxRW58ArLMjrE=w2400",
      rate: {
        count: 19,
        rate: 4.6,
      },
    },
    {
      id: 49,
      title: "Ocean Sunfish",
      price: 4000,
      category: "Fish",
      subcategory: "Ocean",
      description:
        "I caught an ocean sunfish! Good thing I'm wearing ocean sunscreen!",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczODQzCNFjcWvYcN5N0_Ja4h4ITJWJvV3G1BPxYMa7hjWJrLvaJVzoZ7XAdimuJCLQWS4YmAmwkD1D_uKGLeIyEqteNSbq3fX2_7dJLfIw7lf8ey1rU=w2400",
      rate: {
        count: 28,
        rate: 4.9,
      },
    },
    {
      id: 50,
      title: "Sea Butterfly",
      price: 1000,
      category: "Fish",
      subcategory: "Ocean",
      description:
        "I caught a sea butterfly! Try not to confuse it for a sea moth!",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczNME4U46KEjcSBU-9bcO8OpjWSr6OLx8qkpdRumwnbWmATYC49bBqjAR6m-HoOn_WUrsS6EnIUnZtItgaIQ1JcmhyDnrhNdrjZuKz8negScfjmP-_s=w2400",
      rate: {
        count: 36,
        rate: 4.7,
      },
    },
    {
      id: 51,
      title: "Seahorse",
      price: 1100,
      category: "Fish",
      subcategory: "Ocean",
      description: "I caught a seahorse! But...where's its sea jockey?",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczOrRyg98vR8BbBIBx9JD8yIQj55iwr8Y7PV5TJvXKcN_EA3t35yyJpo7lLtE9snTITg17_s9EeEDrbJSpV-y8gsJ7QvHzLhuHfHUh_2zAzaDxm_0KY=w2400",
      rate: {
        count: 25,
        rate: 4.6,
      },
    },
    {
      id: 52,
      title: "Octopus",
      price: 1200,
      category: "Fish",
      subcategory: "Ocean",
      description: "I caught an octopus! I'm so pumped for this dance party!",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczO8a28D7PREnkxA2po0CWEFHwILZ3diKHysnTTgB6T5i3d6uoe2mIuw5Ko9jdogaPnGylvwZ0CjPPXw_Jik01n7UkKJHaRpiipIvBC3_rFpDktZsrc=w2400",
      rate: {
        count: 30,
        rate: 4.8,
      },
    },
    {
      id: 53,
      title: "Sea Urchin",
      price: 300,
      category: "Fish",
      subcategory: "Ocean",
      description: "I caught a sea urchin! Wasn't even 'urchin for it!",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczMOdIGCLlkheDr4JAtXB6AK7yaNUxoD7YDk3eRd9BNe8m9m9pYaAsfmr_hSvT1vtciuSfsy5D4EboCcgLl4djlGESzGdHkLf5f7f4uVN-2X7WK2BVY=w2400",
      rate: {
        count: 17,
        rate: 4.4,
      },
    },
    {
      id: 54,
      title: "Vampire Squid",
      price: 10000,
      category: "Fish",
      subcategory: "Ocean",
      description: "I caught a vampire squid! I'd rather it bite others!",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczPvLnQYNDBW6IQitTc_p-QwaXGSN21cu7LwJBmTtaPHIYUn-nXE1Cp0jkNdI22nCLqJPFL22SlF_Wc8m1Dh7KtnU-ZSZ6C9CDmlQUIYdfXxQDFCF_g=w2400",
      rate: {
        count: 21,
        rate: 4.7,
      },
    },
    {
      id: 55,
      title: "Gigas Giant Clam",
      price: 15000,
      category: "Fish",
      subcategory: "Ocean",
      description: "I caught a gigas giant clam! It's kind of a big deal!",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczOVBwRkKybeZK6030vEp1-oUvB8Yn2cyzH5-E0YDg6_7t4IrdEb7owjGSBMjLT2UyEMt7e1xvC4Lb4L3jT_U8R-lZwhBW8MAGlP8Dfd7wI8OhpiOQQ=w2400",
      rate: {
        count: 14,
        rate: 4.9,
      },
    },
    {
      id: 56,
      title: "Moon Jellyfish",
      price: 600,
      category: "Fish",
      subcategory: "Ocean",
      description:
        "I caught a moon jellyfish! Now to find a sun peanutbutterfish and a stars marmaladefish!",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczN40PlxeDRYC0dxdc76PcnI55tD8r5_wJhRQXdWbLibNBIs_bhgF8eyDimZYcRreW2FovR8SDb1XJjUFRwseucBQcz9epANWCAhzHqhck_1R3Sy_QM=w2400",
      rate: {
        count: 10,
        rate: 4.3,
      },
    },
    {
      id: 57,
      title: "Sea Anemone",
      price: 500,
      category: "Fish",
      subcategory: "Ocean",
      description: "I caught a sea anemone! Mwahahaha! Wait...wrong anemone.",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczPvDGOLHEKGSgEGVpaqBKW33stOUS1RBSc4hj_0XGrX9rIpis70mB6YP7iP2Jg9COHeZGxq0d_LSQ5hj5hHbbwCvHUF1W--wJQB6Ad84bsaVE8On_A=s256-p-k",
      rate: {
        count: 5,
        rate: 4.1,
      },
    },
    {
      id: 58,
      title: "Giant Isopod",
      price: 12000,
      category: "Fish",
      subcategory: "Ocean",
      description: "I caught a giant isopod! I hope it's not a giant grouch.",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczMH51C6mKkDX2mM_lG0vfr4FWRWSz1RTXmoY-7LzkA3W0BLDLWqx0VChe6hwheulqt9P50NtnSbi1Y_qe5k4sr6XJXbS_SYQEzjMyi591psKj0XqqM=s256-p-k",
      rate: {
        count: 18,
        rate: 4.6,
      },
    },
    {
      id: 59,
      title: "Sea Cucumber",
      price: 500,
      category: "Fish",
      subcategory: "Ocean",
      description: "I caught a sea cucumber! It's a bit sassy.",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczMMqw0f1Kp0wiOEmGjULLK7DzWPf-oRV5X3eE-2bIrpJscYuIsB3vSsib415LC6AFFItrCKg-pE9DBStk_aS2RJjTDUqvJOnTuHyQBIeLFuZ7Wc4pw=s256-p-k",
      rate: {
        count: 12,
        rate: 4.5,
      },
    },
    {
      id: 60,
      title: "Pearl Oyster",
      price: 2800,
      category: "Fish",
      subcategory: "Ocean",
      description: "I caught a pearl oyster! It's a little shellfish!",
      image:
        "https://lh3.googleusercontent.com/pw/AP1GczMJC-Ex1cVulp3a2enBZBc2nQzvUexJyTvPHJ94JN1VacaAHyGrfuCvPc1KQGrFFhkPO1qWnoYE1iA_5ZEG1anCgDGh2DKrzDyme5M3vtVWKhKlllE=s256-p-k",
      rate: {
        count: 15,
        rate: 4.7,
      },
    },
  ];

  return fishEntries;
};

export default generateFishEntries;
