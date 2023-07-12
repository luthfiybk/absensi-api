const pool = require('./../connection')

const absensi = async () => {
    const client = await pool.connect()
    try {
        const query = `
            CREATE TABLE IF NOT EXISTS absensi (
                id_absensi SERIAL PRIMARY KEY,
                NRP VARCHAR(30) REFERENCES "user" (NRP),
                jam_msk TIME,
                jam_plg TIME,
                tanggal DATE,
                latitude DOUBLE PRECISION,
                longitude DOUBLE PRECISION
            );
        `
        await client.query(query)
        console.log('Table berhasil dibuat')
    } catch(error) {
        console.error('Terjadi kesalahan ', error)
    } finally {
        client.release()
    }
}

absensi()