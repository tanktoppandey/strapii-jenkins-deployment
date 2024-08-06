// Provided JSON string
const jsonData = `{
    "data": {
        "id": 5,
        "attributes": {
            "createdAt": "2024-05-29T20:28:36.007Z",
            "updatedAt": "2024-05-29T20:28:39.504Z",
            "publishedAt": "2024-05-29T20:28:39.482Z",
            "FIELDSECTIONS": [
                {
                    "id": 2,
                    "__component": "main-heading.mainheading",
                    "type": "main-heading",
                    "title": "ojndjoqncojqo"
                },
                {
                    "id": 1,
                    "__component": "sub-headings.subheadings",
                    "type": "sub-heading",
                    "title": "kqjdsbqojwbxjqlx"
                },
                {
                    "id": 2,
                    "__component": "image.image",
                    "type": "image",
                    "alt": "image"
                }
            ]
        }
    },
    "meta": {}
}`;

// Parse JSON
const jsonObject = JSON.parse(jsonData);

// Extract FIELDSECTIONS
const fieldSections = jsonObject.data.attributes.FIELDSECTIONS;

// Convert fieldSections to JSON format
const fieldSectionsJson = JSON.stringify(fieldSections, null, 4);

// Print FIELDSECTIONS JSON
console.log(fieldSectionsJson);
