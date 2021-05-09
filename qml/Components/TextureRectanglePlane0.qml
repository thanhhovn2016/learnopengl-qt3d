import Qt3D.Core 2.0
import Qt3D.Render 2.0

GeometryRenderer {
	id: plane
	geometry: Geometry {
		boundingVolumePositionAttribute: position

		Attribute {
			id: position
			attributeType: Attribute.VertexAttribute
			vertexBaseType: Attribute.Float
			vertexSize: 3
			count: 4
			byteOffset: 0
			byteStride: 8 * 4
			name: "position"
			buffer: vertexBuffer
		}

		Attribute {
			attributeType: Attribute.VertexAttribute
			vertexBaseType: Attribute.Float
			vertexSize: 3
			count: 4
			byteOffset: 3 * 4
			byteStride: 8 * 4
			name: "color"
			buffer: vertexBuffer
		}

		Attribute {
			attributeType: Attribute.VertexAttribute
			vertexBaseType: Attribute.Float
			vertexSize: 2
			count: 4
			byteOffset: 6 * 4
			byteStride: 8 * 4
			name: "texCoord"
			buffer: vertexBuffer
		}

		Attribute {
			attributeType: Attribute.IndexAttribute
			vertexBaseType: Attribute.UnsignedShort
			vertexSize: 1
			count: 6
			buffer: Buffer {
				type: Buffer.IndexBuffer
				data: new Uint16Array([
					0, 1, 3,  // First Triangle
					1, 2, 3,  // Second Triangle
				])
			}
		}
	}

	Buffer {
		id: vertexBuffer
		type: Buffer.VertexBuffer
		data: new Float32Array([
			// Positions	  // Colors		// Texture Coords
			 0.5,  0.5, 0.0,   1.0, 0.0, 0.0,   1.0, 1.0, // Top Right
			 0.5, -0.5, 0.0,   0.0, 1.0, 0.0,   1.0, 0.0, // Bottom Right
			-0.5, -0.5, 0.0,   0.0, 0.0, 1.0,   0.0, 0.0, // Bottom Left
			-0.5,  0.5, 0.0,   1.0, 1.0, 0.0,   0.0, 1.0, // Top Left
		])
	}
}

