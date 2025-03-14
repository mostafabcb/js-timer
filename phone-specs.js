// Icon size configuration - Edit these values to change individual icon sizes
const iconSizes = {
    release: { width: '32px', height: '32px' },
    os: { width: '38px', height: '38px' },
    display: { width: '32px', height: '32px' },
    camera: { width: '28px', height: '28px' },
    ram: { width: '35px', height: '35px' },
    battery: { width: '35px', height: '35px' }
};

// Container size configuration - Should be equal or larger than icon sizes
const containerSizes = {
    release: { width: '35px', height: '35px' },
    os: { width: '35px', height: '35px' },
    display: { width: '35px', height: '35px' },
    camera: { width: '35px', height: '35px' },
    ram: { width: '35px', height: '35px' },
    battery: { width: '35px', height: '35px' }
};

// Color configuration
const colors = {
    iconFill: '#08f',
    labelColor: '#999',
    valueColor: '#333',
    borderColor: 'rgba(0,0,0,.08)',
    priceBackground: '#f8f9fa',
    priceValueColor: '#08f'
};

// Font size configuration
const fontSizes = {
    label: '14px',
    value: '15px',
    priceTitle: '16px'
};

const specIcons = {
    release: `<svg viewBox="0 0 24 24" width="${iconSizes.release.width}" height="${iconSizes.release.height}"><path d="M19,4h-1V2h-2v2H8V2H6v2H5C3.89,4,3.01,4.9,3.01,6L3,20c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V6C21,4.9,20.1,4,19,4z M19,20H5V10h14V20z M19,8H5V6h14V8z"/></svg>`,
    os: `<svg viewBox="0 0 48 48" width="${iconSizes.os.width}" height="${iconSizes.os.height}"><path d="M7.7,16.2A2.7,2.7,0,0,0,5,18.9V30.3a2.8,2.8,0,0,0,1.2,2.3,2.6,2.6,0,0,0,1.5.4,2.7,2.7,0,0,0,2.2-1.1l.2-.3.3-.7v-12A2.7,2.7,0,0,0,7.7,16.2Z"/><path d="M29.6,6l1.9-3.4c0-.1.1-.1.1-.2a.8.8,0,0,0-.2-.4h-.5l-2,3.5a4.9,4.9,0,0,0-1.7-.6,13.6,13.6,0,0,0-3.6-.5H21.8a12.9,12.9,0,0,0-3.5,1L16.4,2.2A.5.5,0,0,0,16,2h-.2a.4.4,0,0,0-.1.3v.2L17.6,6h0a11.8,11.8,0,0,0-4.4,3.9l-.5.8-.6,1.4a8.9,8.9,0,0,0-.7,3.6H35.8A11.1,11.1,0,0,0,29.6,6ZM18.1,11.4A1.1,1.1,0,0,1,17,10.3a1.1,1.1,0,0,1,1.1-1,1.1,1.1,0,0,1,1,1A1.1,1.1,0,0,1,18.1,11.4Zm11.1,0a1,1,0,0,1-1-1.1,1,1,0,0,1,2,0A1,1,0,0,1,29.2,11.4Z"/><path d="M11.5,16.8V34.4a2.9,2.9,0,0,0,2.9,2.9h2v6A2.6,2.6,0,0,0,18,45.8h1.1l1-.2a2.7,2.7,0,0,0,1.7-2.5v-6h3.7v6a2.7,2.7,0,1,0,5.4,0v-6h2a3.5,3.5,0,0,0,1.7-.6,2.9,2.9,0,0,0,1.2-2.3V16.8Z"/><path d="M42.2,18.9a2.6,2.6,0,0,0-2.1-2.6h-.6a2.7,2.7,0,0,0-2.7,2.7V30.3a2.7,2.7,0,1,0,5.4,0Z"/></svg>`,
    display: `<svg viewBox="0 0 384 512" width="${iconSizes.display.width}" height="${iconSizes.display.height}"><path d="M16 64C16 28.7 44.7 0 80 0L304 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L80 512c-35.3 0-64-28.7-64-64L16 64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64L80 64l0 320 224 0 0-320z"/></svg>`,
    camera: `<svg viewBox="0 0 512 512" width="${iconSizes.camera.width}" height="${iconSizes.camera.height}"><path d="M149.1 64.8L138.7 96 64 96C28.7 96 0 124.7 0 160L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-74.7 0L362.9 64.8C356.4 45.2 338.1 32 317.4 32L194.6 32c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>`,
    ram: `<svg viewBox="0 0 299.92 299.92" width="${iconSizes.ram.width}" height="${iconSizes.ram.height}"><g><g><g><path d="M293.4,65.2H6.52C2.914,65.2,0,68.114,0,71.72v117.36c0,3.606,2.914,6.52,6.52,6.52h6.52v32.6c0,3.606,2.914,6.52,6.52,6.52h260.8c3.606,0,6.52-2.914,6.52-6.52v-32.6h6.52c3.606,0,6.52-2.914,6.52-6.52V71.72C299.92,68.114,297.006,65.2,293.4,65.2z M273.84,221.68h-19.56H228.2h-26.08h-26.08h-26.08h-26.08H97.8H71.72H45.64H26.08V195.6h19.56h26.08H97.8h26.08h26.08h26.08h26.08h26.08h26.08h19.56V221.68z M286.88,182.56h-6.52H19.56h-6.52V78.24h273.84V182.56z"/><path d="M32.6,169.52h39.12c3.606,0,6.52-2.914,6.52-6.52V97.8c0-3.606-2.914-6.52-6.52-6.52H32.6c-3.606,0-6.52,2.914-6.52,6.52V163C26.08,166.606,28.994,169.52,32.6,169.52z M39.12,104.32H65.2v52.16H39.12V104.32z"/><path d="M97.8,169.52h39.12c3.606,0,6.52-2.914,6.52-6.52V97.8c0-3.606-2.914-6.52-6.52-6.52H97.8c-3.606,0-6.52,2.914-6.52,6.52V163C91.28,166.606,94.194,169.52,97.8,169.52z M104.32,104.32h26.08v52.16h-26.08V104.32z"/><path d="M163,169.52h39.12c3.606,0,6.52-2.914,6.52-6.52V97.8c0-3.606-2.914-6.52-6.52-6.52H163c-3.606,0-6.52,2.914-6.52,6.52V163C156.48,166.606,159.394,169.52,163,169.52z M169.52,104.32h26.08v52.16h-26.08V104.32z"/><path d="M228.2,169.52h39.12c3.606,0,6.52-2.914,6.52-6.52V97.8c0-3.606-2.914-6.52-6.52-6.52H228.2c-3.606,0-6.52,2.914-6.52,6.52V163C221.68,166.606,224.594,169.52,228.2,169.52z M234.72,104.32h26.08v52.16h-26.08V104.32z"/><path d="M52.16,215.16v-13.04c0-3.606-2.914-6.52-6.52-6.52c-3.606,0-6.52,2.914-6.52,6.52v13.04c0,3.606,2.914,6.52,6.52,6.52C49.246,221.68,52.16,218.766,52.16,215.16z"/><path d="M78.24,215.16v-13.04c0-3.606-2.914-6.52-6.52-6.52c-3.606,0-6.52,2.914-6.52,6.52v13.04c0,3.606,2.914,6.52,6.52,6.52C75.326,221.68,78.24,218.766,78.24,215.16z"/><path d="M104.32,215.16v-13.04c0-3.606-2.914-6.52-6.52-6.52c-3.606,0-6.52,2.914-6.52,6.52v13.04c0,3.606,2.914,6.52,6.52,6.52C101.406,221.68,104.32,218.766,104.32,215.16z"/><path d="M130.4,215.16v-13.04c0-3.606-2.914-6.52-6.52-6.52c-3.606,0-6.52,2.914-6.52,6.52v13.04c0,3.606,2.914,6.52,6.52,6.52C127.486,221.68,130.4,218.766,130.4,215.16z"/><path d="M156.48,215.16v-13.04c0-3.606-2.914-6.52-6.52-6.52s-6.52,2.914-6.52,6.52v13.04c0,3.606,2.914,6.52,6.52,6.52S156.48,218.766,156.48,215.16z"/><path d="M182.56,215.16v-13.04c0-3.606-2.914-6.52-6.52-6.52c-3.606,0-6.52,2.914-6.52,6.52v13.04c0,3.606,2.914,6.52,6.52,6.52C179.646,221.68,182.56,218.766,182.56,215.16z"/><path d="M208.64,215.16v-13.04c0-3.606-2.914-6.52-6.52-6.52c-3.606,0-6.52,2.914-6.52,6.52v13.04c0,3.606,2.914,6.52,6.52,6.52C205.726,221.68,208.64,218.766,208.64,215.16z"/><path d="M234.72,215.16v-13.04c0-3.606-2.914-6.52-6.52-6.52c-3.606,0-6.52,2.914-6.52,6.52v13.04c0,3.606,2.914,6.52,6.52,6.52C231.806,221.68,234.72,218.766,234.72,215.16z"/><path d="M260.8,215.16v-13.04c0-3.606-2.914-6.52-6.52-6.52c-3.606,0-6.52,2.914-6.52,6.52v13.04c0,3.606,2.914,6.52,6.52,6.52C257.886,221.68,260.8,218.766,260.8,215.16z"/></g></g></g></svg>`,
    battery: `<svg viewBox="0 0 576 512" width="${iconSizes.battery.width}" height="${iconSizes.battery.height}"><path d="M464 160c8.8 0 16 7.2 16 16l0 160c0 8.8-7.2 16-16 16L80 352c-8.8 0-16-7.2-16-16l0-160c0-8.8 7.2-16 16-16l384 0zM80 96C35.8 96 0 131.8 0 176L0 336c0 44.2 35.8 80 80 80l384 0c44.2 0 80-35.8 80-80l0-16c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l0-16c0-44.2-35.8-80-80-80L80 96zm272 96L96 192l0 128 256 0 0-128z"/></svg>`
};

document.addEventListener('DOMContentLoaded', function() {
    const styles = {
        phoneSpecs: {
            maxWidth: '600px',
            margin: '0 auto',
            padding: '15px',
            background: '#fff',
            fontFamily: '-apple-system,BlinkMacSystemFont,sans-serif'
        },
        specItem: {
            display: 'flex',
            alignItems: 'center',
            padding: '12px 0',
            borderBottom: `1px solid ${colors.borderColor}`
        },
        specIcon: (specType) => ({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: containerSizes[specType].width,
            height: containerSizes[specType].height,
            marginRight: '15px',
            overflow: 'hidden'
        }),
        svg: (specType) => ({
            width: iconSizes[specType].width,
            height: iconSizes[specType].height,
            fill: colors.iconFill
        }),
        specContent: {
            display: 'flex',
            flexDirection: 'column'
        },
        specLabel: {
            color: colors.labelColor,
            fontSize: fontSizes.label,
            marginBottom: '2px'
        },
        specValue: {
            color: colors.valueColor,
            fontSize: fontSizes.value
        },
        priceOptions: {
            marginTop: '20px',
            padding: '15px',
            background: colors.priceBackground,
            borderRadius: '8px'
        },
        priceTitle: {
            fontSize: fontSizes.priceTitle,
            color: colors.valueColor,
            marginBottom: '12px',
            fontWeight: '500'
        },
        priceItem: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '8px 0'
        },
        priceLabel: {
            color: colors.labelColor,
            fontSize: fontSizes.label
        },
        priceValue: {
            color: colors.priceValueColor,
            fontWeight: '500',
            fontSize: fontSizes.value
        }
    };

    Object.assign(document.getElementById('phoneSpecs').style, styles.phoneSpecs);

    document.querySelectorAll('.spec-item').forEach(item => {
        Object.assign(item.style, styles.specItem);
        const specType = item.getAttribute('data-spec');
        const iconDiv = item.querySelector('.spec-icon');
        if (iconDiv && specIcons[specType]) {
            iconDiv.innerHTML = specIcons[specType];
            Object.assign(iconDiv.style, styles.specIcon(specType));
            const svg = iconDiv.querySelector('svg');
            if (svg) {
                Object.assign(svg.style, styles.svg(specType));
            }
        }
    });

    document.querySelectorAll('.spec-content').forEach(el => Object.assign(el.style, styles.specContent));
    document.querySelectorAll('.spec-label').forEach(el => Object.assign(el.style, styles.specLabel));
    document.querySelectorAll('.spec-value').forEach(el => Object.assign(el.style, styles.specValue));
    document.querySelectorAll('.price-options').forEach(el => Object.assign(el.style, styles.priceOptions));
    document.querySelectorAll('.price-title').forEach(el => Object.assign(el.style, styles.priceTitle));
    document.querySelectorAll('.price-item').forEach(el => Object.assign(el.style, styles.priceItem));
    document.querySelectorAll('.price-label').forEach(el => Object.assign(el.style, styles.priceLabel));
    document.querySelectorAll('.price-value').forEach(el => Object.assign(el.style, styles.priceValue));
});