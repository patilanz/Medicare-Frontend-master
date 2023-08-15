export interface LabTests {
    name: string;
    url: string;
    description?: string;
}


export const labTests: LabTests[] = [
    {
        name: 'Vitamin D',
        url: 'vitaminDtest.jpg',
        description: 'bomba s gas'
    },
    {
        name: 'Diabetes',
        url: 'diabetesTest.jpg'
    },
    {
        name: 'Iron Deficiency',
        url: 'ironDeficiencyTest.jpg'
    },
    {
        name: 'Testosterone',
        url: 'testosteroneTest.png'
    },
    {
        name: 'Covid-19 PCR Test',
        url: 'covidTest.jpg'
    },
    {
        name: 'Lipid Profile',
        url: 'lipidProfile.jpg'
    },
    {
        name: 'Thyroid Profile',
        url: 'thyroidProfile.jpg'
    },
    {
        name: 'Kidney Function Test',
        url: 'kidneyFunctionTest.jpg'
    }
];