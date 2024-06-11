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
  ];

  return fishEntries;
};

export default generateFishEntries;
