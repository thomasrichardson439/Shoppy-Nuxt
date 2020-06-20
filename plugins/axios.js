export default function ({ $axios }) {
    $axios.onRequest(config => {
        config.validateStatus = () => true;
        return config;
    });
}
