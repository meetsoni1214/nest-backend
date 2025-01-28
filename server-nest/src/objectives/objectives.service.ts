import {Injectable} from '@nestjs/common';

@Injectable()
export class ObjectivesService {
    MOCK_OBJECTIVES = [{
        "id": "153aeb0c-38e4-4f76-aa65-14d05894f95f",
        "title": "plug-and-play",
        "keyResults": [{
            "title": "channels",
            "initialValue": 38,
            "currValue": 49,
            "targetValue": 50,
            "metrics": "productize"
        }, {
            "title": "initiatives",
            "initialValue": 78,
            "currValue": 83,
            "targetValue": 90,
            "metrics": "optimize"
        }, {
            "title": "interfaces",
            "initialValue": 64,
            "currValue": 84,
            "targetValue": 90,
            "metrics": "implement"
        }, {
            "title": "networks",
            "initialValue": 19,
            "currValue": 24,
            "targetValue": 40,
            "metrics": "whiteboard"
        }, {"title": "models", "initialValue": 24, "currValue": 27, "targetValue": 75, "metrics": "gamify"}]
    }, {
        "id": "14fb9413-dd72-4147-9f56-53d21f0af7dc",
        "title": "B2B",
        "keyResults": [{
            "title": "AI",
            "initialValue": 48,
            "currValue": 61,
            "targetValue": 75,
            "metrics": "transition"
        }, {
            "title": "systems",
            "initialValue": 51,
            "currValue": 62,
            "targetValue": 100,
            "metrics": "maximize"
        }, {
            "title": "paradigms",
            "initialValue": 28,
            "currValue": 84,
            "targetValue": 95,
            "metrics": "enhance"
        }, {"title": "ROI", "initialValue": 40, "currValue": 50, "targetValue": 55, "metrics": "productize"}]
    }, {
        "id": "fbb3c4f7-9c03-42d4-8d13-0f2218b7649f",
        "title": "viral",
        "keyResults": [{
            "title": "supply-chains",
            "initialValue": 53,
            "currValue": 53,
            "targetValue": 55,
            "metrics": "disintermediate"
        }, {
            "title": "paradigms",
            "initialValue": 62,
            "currValue": 65,
            "targetValue": 75,
            "metrics": "innovate"
        }, {"title": "methodologies", "initialValue": 97, "currValue": 99, "targetValue": 100, "metrics": "repurpose"}]
    }, {
        "id": "950c595c-609c-473b-a9f9-30d89b47577e",
        "title": "mission-critical",
        "keyResults": [{
            "title": "platforms",
            "initialValue": 6,
            "currValue": 13,
            "targetValue": 20,
            "metrics": "disintermediate"
        }, {
            "title": "supply-chains",
            "initialValue": 55,
            "currValue": 55,
            "targetValue": 55,
            "metrics": "reinvent"
        }, {
            "title": "content",
            "initialValue": 32,
            "currValue": 54,
            "targetValue": 80,
            "metrics": "architect"
        }, {"title": "mindshare", "initialValue": 86, "currValue": 95, "targetValue": 95, "metrics": "streamline"}]
    }, {
        "id": "48045274-8c21-4f13-9356-3c4c3e1db605",
        "title": "scalable",
        "keyResults": [{
            "title": "interfaces",
            "initialValue": 12,
            "currValue": 47,
            "targetValue": 60,
            "metrics": "synthesize"
        }, {
            "title": "niches",
            "initialValue": 60,
            "currValue": 63,
            "targetValue": 65,
            "metrics": "strategize"
        }, {
            "title": "blockchains",
            "initialValue": 24,
            "currValue": 31,
            "targetValue": 45,
            "metrics": "scale"
        }, {
            "title": "methodologies",
            "initialValue": 93,
            "currValue": 95,
            "targetValue": 95,
            "metrics": "productize"
        }, {"title": "synergies", "initialValue": 84, "currValue": 84, "targetValue": 85, "metrics": "maximize"}]
    }]

    getAll() {
        return this.MOCK_OBJECTIVES;
    }
}
