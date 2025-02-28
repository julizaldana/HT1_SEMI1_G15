from flask import Flask, jsonify

app = Flask(__name__)

# Endpoint de verificación
@app.route('/check', methods=['GET'])
def check():
    return 'OK', 200

# Endpoint de información
@app.route('/info', methods=['GET'])
def info():
    return jsonify({
        "Instancia": "Maquina 2 - API 2",
        "Curso": "Seminario de Sistemas 1 A",
        "Grupo": "Grupo #15"
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
