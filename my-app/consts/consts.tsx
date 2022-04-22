const optionsSelect = [
    { value: 1, label: 'Very well' },
    { value: 2, label: 'Good' },
    { value: 3, label: 'Could be better' },
    { value: 4, label: 'Bad'},
    { value: 5, label: 'Very bad'},
];

const optionsRadio = [
    { value: 1, label: 'Yes' },
    { value: 2, label: 'Maybe' },
    { value: 3, label: 'No' },
];

const optionsCheckBox = [
    { value: 1, label: 'Reduce time of response' },
    { value: 2, label: 'Improve Graphical User Interface' },
    { value: 3, label: 'Add new practical features' },
    { value: 4, label: 'Reduce the price of our services'},
    { value: 5, label: 'Update User terms'},
]

const defaultValue = [
    { value: 0, label: 'Choose your rate to our services'}
]

const appRoutes = ['/ ', '/survey', '/login'];

const api = "33bde26b41eeb4589d2c644f56d2968a";

export default {
    api,
    optionsSelect,
    optionsRadio,
    optionsCheckBox,
    defaultValue,
    appRoutes,
}