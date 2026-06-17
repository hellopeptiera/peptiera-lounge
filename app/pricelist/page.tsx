const products = [
  // HGH
  { code: "M10", name: "HGH 191AA (Somatropin)", strength: "10iu", price: "₱315" },
  { code: "M12", name: "HGH 191AA (Somatropin)", strength: "12iu", price: "₱416" },
  { code: "M15", name: "HGH 191AA (Somatropin)", strength: "15iu", price: "₱460" },
  { code: "M24", name: "HGH 191AA (Somatropin)", strength: "24iu", price: "₱738" },

  // Melanotan
  { code: "MT1", name: "MT-1", strength: "10mg", price: "₱347" },
  { code: "ML10", name: "MT-2 (Melanotan 2 Acetate)", strength: "10mg", price: "₱347" },

  // Semaglutide
  { code: "SM5", name: "Semaglutide", strength: "5mg", price: "₱215" },
  { code: "SM10", name: "Semaglutide", strength: "10mg", price: "₱309" },
  { code: "SM15", name: "Semaglutide", strength: "15mg", price: "₱353" },
  { code: "SM20", name: "Semaglutide", strength: "20mg", price: "₱448" },
  { code: "SM30", name: "Semaglutide", strength: "30mg", price: "₱605" },

  // Tirzepatide
  { code: "TR5", name: "Tirzepatide", strength: "5mg", price: "₱259" },
  { code: "TR10", name: "Tirzepatide", strength: "10mg", price: "₱328" },
  { code: "TR15", name: "Tirzepatide", strength: "15mg", price: "₱429" },
  { code: "TR20", name: "Tirzepatide", strength: "20mg", price: "₱517" },
  { code: "TR30", name: "Tirzepatide", strength: "30mg", price: "₱605" },
  { code: "TR40", name: "Tirzepatide", strength: "40mg", price: "₱782" },
  { code: "TR50", name: "Tirzepatide", strength: "50mg", price: "₱977" },
  { code: "TR60", name: "Tirzepatide", strength: "60mg", price: "₱1090" },
  { code: "TR70", name: "Tirzepatide", strength: "70mg", price: "₱1248" },
  { code: "TR80", name: "Tirzepatide", strength: "80mg", price: "₱1424" },
  { code: "TR90", name: "Tirzepatide", strength: "90mg", price: "₱1594" },
  { code: "TR100", name: "Tirzepatide", strength: "100mg", price: "₱1771" },
  { code: "TR120", name: "Tirzepatide", strength: "120mg", price: "₱1947" },

  // Retatrutide
  { code: "RT5", name: "Retatrutide", strength: "5mg", price: "₱429" },
  { code: "RT10", name: "Retatrutide", strength: "10mg", price: "₱605" },
  { code: "RT15", name: "Retatrutide", strength: "15mg", price: "₱693" },
  { code: "RT20", name: "Retatrutide", strength: "20mg", price: "₱782" },
  { code: "RT30", name: "Retatrutide", strength: "30mg", price: "₱1128" },
  { code: "RT40", name: "Retatrutide", strength: "40mg", price: "₱1475" },
  { code: "RT50", name: "Retatrutide", strength: "50mg", price: "₱1651" },
  { code: "RT60", name: "Retatrutide", strength: "60mg", price: "₱1998" },

  // Epithalon
  { code: "ET10", name: "Epithalon", strength: "10mg", price: "₱259" },
  { code: "ET50", name: "Epithalon", strength: "50mg", price: "₱1040" },

  // Tesamorelin
  { code: "TSM2", name: "Tesamorelin", strength: "2mg", price: "₱315" },
  { code: "TSM5", name: "Tesamorelin", strength: "5mg", price: "₱656" },
  { code: "TSM10", name: "Tesamorelin", strength: "10mg", price: "₱1197" },

  // GHK-CU
  { code: "CU50", name: "GHK-CU", strength: "50mg", price: "₱208" },
  { code: "CU100", name: "GHK-CU", strength: "100mg", price: "₱284" },

  // Blends
  { code: "BBG70", name: "TB10 + BPC157 10 + GHK50", strength: "70mg", price: "₱1248" },
  { code: "Klow80", name: "BT10 + BP10 + CU50 + KP10", strength: "80mg", price: "₱1386" },

  // Glutathione & NAD
  { code: "GTT1500", name: "Glutathione", strength: "1500mg", price: "₱448" },
  { code: "NJ100", name: "NAD+", strength: "100mg", price: "₱259" },
  { code: "NJ500", name: "NAD+", strength: "500mg", price: "₱517" },

    // BPC & TB500
  { code: "BC5", name: "BPC-157", strength: "5mg", price: "₱259" },
  { code: "BC10", name: "BPC-157", strength: "10mg", price: "₱385" },
  { code: "BB10", name: "BPC-157 + TB500", strength: "10mg", price: "₱643" },
  { code: "BB20", name: "BPC-157 + TB500", strength: "20mg", price: "₱1248" },

  // Sterile Water
  { code: "WA10", name: "Sterile Water (PBS)", strength: "10ml", price: "₱70" },
  { code: "WA3", name: "Sterile Water (PBS)", strength: "3ml", price: "₱57" },

  // Bacteriostatic Water
  { code: "BA10", name: "Bacteriostatic Water", strength: "10ml", price: "₱70" },
  { code: "BA3", name: "Bacteriostatic Water", strength: "3ml", price: "₱57" },

  // Acetic Acid Water
  { code: "AA10", name: "Acetic Acid Sterile Water", strength: "10ml", price: "₱70" },
  { code: "AA3", name: "Acetic Acid Sterile Water", strength: "3ml", price: "₱57" },

  // AICAR & Adipotide
  { code: "AR50", name: "AICAR", strength: "50mg", price: "₱429" },
  { code: "AP5", name: "Adipotide", strength: "5mg", price: "₱1015" },

  // DSIP
  { code: "DS5", name: "DSIP", strength: "5mg", price: "₱278" },
  { code: "DS15", name: "DSIP", strength: "15mg", price: "₱580" },

  // Sermorelin
  { code: "SMO5", name: "Sermorelin Acetate", strength: "5mg", price: "₱448" },
  { code: "SMO10", name: "Sermorelin Acetate", strength: "10mg", price: "₱675" },

  // Lemon Bottle
  { code: "Lemon", name: "Lemon Bottle", strength: "10ml", price: "₱429" },

  // SLU-PP-332
  { code: "SLU5", name: "SLU-PP-332", strength: "5mg", price: "₱605" },

  // MOTS-C
  { code: "MS10", name: "MOTS-C", strength: "10mg", price: "₱416" },
  { code: "MS40", name: "MOTS-C", strength: "40mg", price: "₱1179" },

  // AOD9604
  { code: "2AD", name: "AOD9604", strength: "2mg", price: "₱347" },

  // Hexarelin
  { code: "HX5", name: "Hexarelin Acetate", strength: "5mg", price: "₱498" },

  // Thymalin
  { code: "TY10", name: "Thymalin", strength: "10mg", price: "₱416" },

  // FOXO4
  { code: "F410", name: "FOXO4", strength: "10mg", price: "₱2142" },

  // LL37
  { code: "LL37", name: "LL37", strength: "5mg", price: "₱555" },

  // Melatonin
  { code: "MT10", name: "Melatonin", strength: "10mg", price: "₱429" },

  // Dermorphin
  { code: "DR5", name: "Dermorphin", strength: "5mg", price: "₱215" },

  // Glutathione 600
  { code: "GTT600", name: "Glutathione", strength: "600mg", price: "₱315" },

  // Cerebrolysin
  { code: "CBL60", name: "Cerebrolysin", strength: "60mg", price: "₱389" },

  // ACE-031
  { code: "AE1", name: "ACE-031", strength: "1mg", price: "₱895" },

  // GDF-8
  { code: "F81", name: "GDF-8", strength: "1mg", price: "₱851" },

  // Thymosin Alpha-1
  { code: "TA5", name: "Thymosin Alpha-1", strength: "5mg", price: "₱460" },
  { code: "TA10", name: "Thymosin Alpha-1", strength: "10mg", price: "₱895" },

  // GLP-1
  { code: "GP", name: "GLP-1", strength: "5mg", price: "₱479" },

  // Insulin
  { code: "ISU", name: "Insulin", strength: "1 unit", price: "₱2079" },

    // ARA-290
  { code: "RA10", name: "ARA-290", strength: "10mg", price: "₱321" },

  // 5-Amino-1MQ
  { code: "5MQ", name: "5-Amino-1MQ", strength: "50mg", price: "₱977" },

  // KPV
  { code: "KP10", name: "KPV", strength: "10mg", price: "₱378" },

  // TB500
  { code: "TB5", name: "TB500", strength: "5mg", price: "₱328" },
  { code: "TB10", name: "TB500", strength: "10mg", price: "₱555" },

  // SS-31
  { code: "SS5", name: "SS-31", strength: "5mg", price: "₱378" },
  { code: "SS10", name: "SS-31", strength: "10mg", price: "₱656" },

  // Pinealon
  { code: "PN10", name: "Pinealon", strength: "10mg", price: "₱309" },

  // Selank
  { code: "SEL5", name: "Selank", strength: "5mg", price: "₱328" },
  { code: "SEL10", name: "Selank", strength: "10mg", price: "₱580" },

  // Semax
  { code: "SEM5", name: "Semax", strength: "5mg", price: "₱328" },
  { code: "SEM10", name: "Semax", strength: "10mg", price: "₱580" },

  // Cagrilintide
  { code: "CG5", name: "Cagrilintide", strength: "5mg", price: "₱429" },
  { code: "CG10", name: "Cagrilintide", strength: "10mg", price: "₱656" },

  // Mazdutide
  { code: "MZ10", name: "Mazdutide", strength: "10mg", price: "₱555" },

  // Survodutide
  { code: "SV10", name: "Survodutide", strength: "10mg", price: "₱656" },

  // Oxytocin
  { code: "OX10", name: "Oxytocin", strength: "10iu", price: "₱278" },

  // Gonadorelin
  { code: "GN2", name: "Gonadorelin", strength: "2mg", price: "₱278" },

  // HCG
  { code: "HCG5000", name: "HCG", strength: "5000iu", price: "₱498" },

  // HMG
  { code: "HMG75", name: "HMG", strength: "75iu", price: "₱908" },

  // Kisspeptin
  { code: "KS5", name: "Kisspeptin", strength: "5mg", price: "₱517" },

  // PT-141
  { code: "PT10", name: "PT-141", strength: "10mg", price: "₱429" },

  // Ipamorelin
  { code: "IPA10", name: "Ipamorelin", strength: "10mg", price: "₱416" },

  // Healthy Hair Skin Nails
  { code: "HHB", name: "Healthy Hair Skin Nails Blend", strength: "Blend", price: "₱756" },

  // LC216
  { code: "LC216", name: "L-Carnitine Blend", strength: "216mg", price: "₱435" },

  // LC600
  { code: "LC600", name: "L-Carnitine", strength: "600mg", price: "₱580" },

  // SNAP-8
  { code: "SN8", name: "SNAP-8", strength: "10mg", price: "₱429" },

  // Hyaluronic Acid
  { code: "HA10", name: "Hyaluronic Acid", strength: "10mg", price: "₱315" },

    // AOD9604
  { code: "2AD5", name: "AOD9604", strength: "5mg", price: "₱429" },
  { code: "2AD10", name: "AOD9604", strength: "10mg", price: "₱656" },

  // ACE-031
  { code: "AE1", name: "ACE-031", strength: "1mg", price: "₱895" },

  // GDF-8 (Myostatin)
  { code: "F81", name: "GDF-8", strength: "1mg", price: "₱851" },

  // Hexarelin
  { code: "HX5", name: "Hexarelin Acetate", strength: "5mg", price: "₱498" },

  // Melatonin
  { code: "MT10", name: "Melatonin", strength: "10mg", price: "₱429" },

  // Dermorphin
  { code: "DR5", name: "Dermorphin", strength: "5mg", price: "₱215" },

  // Pinealon
  { code: "PN10", name: "Pinealon", strength: "10mg", price: "₱309" },

  // Thymalin
  { code: "TY10", name: "Thymalin", strength: "10mg", price: "₱416" },

  // Thymosin Alpha-1
  { code: "TA5", name: "Thymosin Alpha-1", strength: "5mg", price: "₱460" },
  { code: "TA10", name: "Thymosin Alpha-1", strength: "10mg", price: "₱895" },

  // FOXO4
  { code: "F410", name: "FOXO4", strength: "10mg", price: "₱2142" },

  // LL37
  { code: "LL37", name: "LL37", strength: "5mg", price: "₱555" },

  // MOTS-C
  { code: "MS10", name: "MOTS-C", strength: "10mg", price: "₱416" },
  { code: "MS40", name: "MOTS-C", strength: "40mg", price: "₱1179" },

  // Cerebrolysin
  { code: "CBL60", name: "Cerebrolysin", strength: "60mg", price: "₱389" },

  // Glutathione
  { code: "GTT600", name: "Glutathione", strength: "600mg", price: "₱315" },
  { code: "GTT1500", name: "Glutathione", strength: "1500mg", price: "₱448" },

  // NAD+
  { code: "NJ100", name: "NAD+", strength: "100mg", price: "₱259" },
  { code: "NJ500", name: "NAD+", strength: "500mg", price: "₱517" },

  // GLP-1
  { code: "GP", name: "GLP-1", strength: "5mg", price: "₱479" },

  // Insulin
  { code: "ISU", name: "Insulin", strength: "1 unit", price: "₱2079" },

  // Sterile Water
  { code: "WA3", name: "Sterile Water (PBS)", strength: "3ml", price: "₱57" },
  { code: "WA10", name: "Sterile Water (PBS)", strength: "10ml", price: "₱70" },

  // BAC Water
  { code: "BA3", name: "Bacteriostatic Water", strength: "3ml", price: "₱57" },
  { code: "BA10", name: "Bacteriostatic Water", strength: "10ml", price: "₱70" },

  // Acetic Acid Water
  { code: "AA3", name: "Acetic Acid Sterile Water", strength: "3ml", price: "₱57" },
  { code: "AA10", name: "Acetic Acid Sterile Water", strength: "10ml", price: "₱70" },

    // AICAR
  { code: "AR50", name: "AICAR", strength: "50mg", price: "₱429" },

  // Adipotide
  { code: "AP5", name: "Adipotide", strength: "5mg", price: "₱1015" },

  // DSIP
  { code: "DS5", name: "DSIP", strength: "5mg", price: "₱278" },
  { code: "DS15", name: "DSIP", strength: "15mg", price: "₱580" },

  // Sermorelin
  { code: "SMO5", name: "Sermorelin Acetate", strength: "5mg", price: "₱448" },
  { code: "SMO10", name: "Sermorelin Acetate", strength: "10mg", price: "₱675" },

  // SLU-PP-332
  { code: "SLU5", name: "SLU-PP-332", strength: "5mg", price: "₱605" },

  // MT-1 & MT-2
  { code: "MT1", name: "MT-1", strength: "10mg", price: "₱347" },
  { code: "ML10", name: "MT-2 (Melanotan II)", strength: "10mg", price: "₱347" },

  // HGH
  { code: "M10", name: "HGH 191AA (Somatropin)", strength: "10iu", price: "₱315" },
  { code: "M12", name: "HGH 191AA (Somatropin)", strength: "12iu", price: "₱416" },
  { code: "M15", name: "HGH 191AA (Somatropin)", strength: "15iu", price: "₱460" },
  { code: "M24", name: "HGH 191AA (Somatropin)", strength: "24iu", price: "₱738" },

  // Epithalon
  { code: "ET10", name: "Epithalon", strength: "10mg", price: "₱259" },
  { code: "ET50", name: "Epithalon", strength: "50mg", price: "₱1040" },

  // Tesamorelin
  { code: "TSM2", name: "Tesamorelin", strength: "2mg", price: "₱315" },
  { code: "TSM5", name: "Tesamorelin", strength: "5mg", price: "₱656" },
  { code: "TSM10", name: "Tesamorelin", strength: "10mg", price: "₱1197" },

  // GHK-CU
  { code: "CU50", name: "GHK-CU", strength: "50mg", price: "₱208" },
  { code: "CU100", name: "GHK-CU", strength: "100mg", price: "₱284" },

  // Specialty Blends
  { code: "BBG70", name: "TB10 + BPC157 10 + GHK50", strength: "70mg", price: "₱1248" },
  { code: "Klow80", name: "BT10 + BP10 + CU50 + KP10", strength: "80mg", price: "₱1386" },

  // Lemon Bottle
  { code: "Lemon", name: "Lemon Bottle", strength: "10ml", price: "₱429" },

  // ARA-290
  { code: "RA10", name: "ARA-290", strength: "10mg", price: "₱321" },

  // 5-Amino-1MQ
  { code: "5MQ", name: "5-Amino-1MQ", strength: "50mg", price: "₱977" },

  // Healthy Hair Skin Nails Blend
  { code: "HHB", name: "Healthy Hair Skin Nails Blend", strength: "Blend", price: "₱756" },

  // L-Carnitine Blends
  { code: "LC216", name: "L-Carnitine Blend", strength: "216mg", price: "₱435" },
  { code: "LC600", name: "L-Carnitine", strength: "600mg", price: "₱580" },

  // SNAP-8
  { code: "SN8", name: "SNAP-8", strength: "10mg", price: "₱429" },

  // Hyaluronic Acid
  { code: "HA10", name: "Hyaluronic Acid", strength: "10mg", price: "₱315" },
