export const applianceData = [
    { key: "washingMachine", value: "Стиральная машина" },
    { key: "refrigerator", value: "Холодильник" },
    { key: "oven", value: "Духовой шкаф" },
    { key: "dishwasher", value: "Посудомоечная машина" },
    { key: "microwave", value: "Микроволновая печь" },
    { key: "dryer", value: "Сушильная машина" },
    { key: "airConditioner", value: "Кондиционер" },
    { key: "electricKettle", value: "Электрический чайник" },
    { key: "vacuumCleaner", value: "Пылесос" },
    { key: "coffeeMachine", value: "Кофемашина" },
    { key: "toaster", value: "Тостер" },
    { key: "meatGrinder", value: "Мясорубка" },
    { key: "blender", value: "Блендер" },
    { key: "breadMaker", value: "Хлебопечка" },
    { key: "waterHeater", value: "Водонагреватель" },
    { key: "electricStove", value: "Электроплита" },
    { key: "gasStove", value: "Газовая плита" },
    { key: "extractorHood", value: "Вытяжка" },
    { key: "thermopot", value: "Термопот" },
    { key: "juicer", value: "Соковыжималка" },
    { key: "steamCooker", value: "Пароварка" },
    { key: "multicooker", value: "Мультиварка" },
    { key: "iron", value: "Утюг" },
    { key: "hairDryer", value: "Фен" },
    { key: "electricShaver", value: "Электробритва" },
    { key: "airPurifier", value: "Очиститель воздуха" },
    { key: "heater", value: "Обогреватель" },
    { key: "fan", value: "Вентилятор" },
    { key: "robotVacuum", value: "Робот-пылесос" },
    { key: "electricGrill", value: "Электрогриль" },
    { key: "foodProcessor", value: "Кухонный комбайн" },
    { key: "freezer", value: "Морозильник" },
    { key: "gasWaterHeater", value: "Газовая колонка" },
    { key: "fireplaceStove", value: "Печь-камин" },
    { key: "tv", value: "Телевизор" },
    { key: "audioSystem", value: "Аудиосистема" },
    { key: "washerDryer", value: "Стирально-сушильная машина" },
    { key: "builtInAppliances", value: "Встраиваемая техника" },
    { key: "smokeDetector", value: "Детектор дыма" },
    { key: "humidifier", value: "Увлажнитель воздуха" },
    { key: "massageChair", value: "Массажное кресло" }
];


export const customSelectStyles = {
    control: (base, state) => ({
        ...base,
        backgroundColor: 'white',
        color: 'black',
        borderRadius: '0.375rem',
        padding: '2px',
        borderColor: '#d1d5db',  // обычный цвет бордера
        boxShadow: 'none',
        outline: 'none',
        // При фокусе и ховере бордер не меняется и нет тени и outline
        '&:hover': {
            borderColor: '#d1d5db',
            boxShadow: 'none',
            outline: 'none',
        },
        ...(state.isFocused && {
            borderColor: '#d1d5db',
            boxShadow: 'none',
            outline: 'none',
        }),
    }),

    menu: (base) => ({
        ...base,
        zIndex: 10,
        backgroundColor: 'white',
        color: 'black'
    }),
    option: (base, state) => ({
        ...base,
        backgroundColor: state.isSelected ? '#d13703' : state.isFocused ? '#d13703' : 'white',
        color: state.isSelected ? 'white' : state.isFocused ? '#111827' : 'black',
        cursor: 'pointer',
        '&:active': { backgroundColor: '#d13703' }
    }),
    multiValue: (base) => ({ ...base, backgroundColor: '#d13703', color: 'white' }),
    multiValueLabel: (base) => ({ ...base, color: 'white' }),
    multiValueRemove: (base) => ({
        ...base,
        color: 'white',
        ':hover': { backgroundColor: '#d13703', color: 'white' }
    }),
    placeholder: (base) => ({ ...base, color: '#6b7280' }),
    input: (base) => ({ ...base, color: 'black' })
};