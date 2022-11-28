CREATE TABLE "public"."clinvars" (
    "id" varchar,
    "pos" varchar,
    "ref" varchar,
    "alt" varchar,
    "qual" varchar,
    "filter" varchar,
    "info" jsonb,
    PRIMARY KEY ("id")
);

INSERT INTO
    "public"."clinvars" (
        "id",
        "pos",
        "ref",
        "alt",
        "qual",
        "filter",
        "info"
    )
VALUES
    (
        '1019397',
        '925952',
        'G',
        'A',
        '',
        '',
        '{ "ALLELEID ": "1003021", "CLNDISDB": "MedGen:CN517202",
"CLNDN": "not_provided", "CLNHGVS": "NC_000001.11:g.925952G>A",
"CLNREVSTAT": "criteria_provided", "CLNSIG": "Uncertain_significance",
"CLNVC": "single_nucleotide_variant", "CLNVCSO": "SO:0001483",
"GENEINFO": "SAMD11 :148398", "MC": "SO:0001583|missense_variant",
"ORIGIN": "1", "RS": "1640863258" }'
    );