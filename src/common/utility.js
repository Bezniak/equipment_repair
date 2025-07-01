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